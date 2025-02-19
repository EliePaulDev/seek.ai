from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests
import environ

env = environ.Env()

# Create your views here.
@api_view(["GET"])
def search(request):
    company_name = request.query_params["company"].strip('"')

    headers = {
        "X-Cb-user-key": env("DJANGO_CRUNCHBASE_API_KEY"),
        "Content-Type": "application/json"
    }

    payload = {
        "field_ids": ["name", "linkedin", "twitter", "facebook", "short_description", "listed_stock_symbol", "image_url", "identifier", "website_url", "location_identifiers"],
        "query": [{
            "type": "predicate",
            "field_id": "identifier",
            "operator_id": "contains",
            "values": [company_name]
        }]
    }

    company_data = requests.post(f"{env("DJANGO_CRUNCHBASE_API_URL")}/data/searches/organizations", headers=headers, json=payload).json()

    return Response(company_data)


