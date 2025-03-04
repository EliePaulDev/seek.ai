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
    
    monkeypatch.setattr('requests.post', mock_request_post)


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
        response = client.post('/feedback/', {'feedback': 'test'})
        assert response.status_code == 200


class TestDonate:
    def test_post_donate(self):
        client = Client()
        response = client.post('/donate/', {'donation': 100})
        assert response.status_code == 200