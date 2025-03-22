from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests
import environ
import stripe
import json

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


@api_view(["POST"])
def feedback(request):
    feedback = request.data["feedback"]
    print(feedback)
    return Response({"message": "Feedback received"})


@api_view(["POST"])
def donate(request):
    donation = request.data["donation"]
    donation_amount = int(donation["amount"]) * 100
    stripe.api_key = env("DJANGO_STRIPE_SECRET_KEY")
    donation_payment = stripe.PaymentIntent.create(
                        amount=donation_amount,
                        currency='usd',
                        )
    return Response({"message": "Donation received"})

@api_view(["GET"])
def company(request, company_id):
    headers = {
        "X-Cb-user-key": env("DJANGO_CRUNCHBASE_API_KEY"),
        "Content-Type": "application/json"
    }

    company_data = requests.get(f"{env('DJANGO_CRUNCHBASE_API_URL')}/data/entities/organizations/{company_id}?field_ids=name&card_ids=fields", headers=headers).json()

    print(company_data)

    return Response(company_data)

