from django.shortcuts import render
from rest_framework.views import APIView
from tasks import fetch_car_details, save_car_details, save_form_data, fetch_insurance_quote, fetch_travel_insurance_quote
from rest_framework.response import Response
from rest_framework import status
import redis

class Home(APIView):
    def get(self, request):
        return render(request, 'index.html')
    
class About(APIView):
    def get(self, request):
        return render(request, 'about.html')
    
class Contact(APIView):
    def get(self, request):
        return render(request, 'contact.html')
    
class CarDetails(APIView):
    
    def post(self, request):
        registration = request.data.get('registration')

        fetch_car_details.delay(registration)
        return Response(status=status.HTTP_200_OK)

class CarInsuranceQuote(APIView):
    def post(self, request):
        insurance_type = request.data.get('insurance_type')
        user_details = request.data.get('user_details')  # Other user details for quote

        # Save form data to Redis temporarily
        save_form_data.delay(insurance_type, user_details)

        # Send insurance quote request
        fetch_insurance_quote.delay(insurance_type, user_details)

        return Response(status=status.HTTP_200_OK)
    

class TravelInsuranceQuotes(APIView):
    def post(self, request):
        geographic_area = request.data.get("geographic_area")
        user_details = request.data.get("user_details")

        save_form_data.delay(geographic_area, user_details)

        fetch_travel_insurance_quote.delay(geographic_area, user_details)

        return Response(status=status.HTTP_200_OK)
    

    