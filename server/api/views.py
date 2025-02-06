from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def search(request):
    response = request.POST
    return JsonResponse(response)