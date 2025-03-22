from django.test import Client
import pytest




# Create your tests here.
@pytest.fixture
def mock_request_api(monkeypatch):
    class MockResponse:
        def __init__(self, json_data, status_code):
            self.json_data = json_data
            self.status_code = status_code

        def json(self):
            return self.json_data
        

    def mock_request_post(url, headers, json):
        return MockResponse(json, 200)
    
    def mock_request_get(url, headers):
        return MockResponse({"test": "test"}, 200)
    
    monkeypatch.setattr('requests.post', mock_request_post)

    monkeypatch.setattr('requests.get', mock_request_get)


@pytest.mark.usefixtures("mock_request_api")
class TestSearch:
    def test_get_search(self, mock_request_api):
        client = Client()
        response = client.get('/search?company=test')
        status_code = response.status_code
        json_response = response.json()
        assert status_code == 200
    
    def test_get_search_update_payload(self, mock_request_api):
        client = Client()
        response = client.get('/search?company=test')
        json_response = response.json()
        assert json_response["query"][0]["values"][0] == "test"


class TestFeedback:
    def test_post_feedback(self):
        client = Client()
        response = client.post('/feedback/', {'feedback': 'test'}, content_type="application/json")
        assert response.status_code == 200


class TestDonate:
    def test_post_donate(self):
        client = Client()
        response = client.post('/donate/', {"donation": {"name": "test", "amount": "2"}}, content_type="application/json")
        assert response.status_code == 200


@pytest.mark.usefixtures("mock_request_api")
class TestCompany:
    def test_get_company(self, mock_request_api):
        client = Client()
        response = client.get('/company/1a589394-26c9-4ce5-8778-f3c9ecc2993f')
        json_response = response.json()
        assert json_response["test"] == "test"