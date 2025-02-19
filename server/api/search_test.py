from django.test import TestCase
from django.test import Client

# Create your tests here.
class SearchTest(TestCase):
    def test_post_search(self):
        client = Client()
        response = client.post('/search/', {'search': 'test'})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {'search': 'test'})