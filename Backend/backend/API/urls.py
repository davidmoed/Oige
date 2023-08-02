from django.urls import path
from .views import CarDetailsForARK, CarInsuranceQuote, TravelInsuranceQuotes, Home, About, Contact

urlpatterns = [
    path('', Home.as_view(), name='home'),
    path('about/', About.as_view(), name='about'),
    path('contact/', Contact.as_view(), name='contact'),
    path('car-details-for-ARK/', CarDetailsForARK.as_view(), name='car-details'),
    path('car-insurance-quote/', CarInsuranceQuote.as_view(), name='car-insurance-quote'),
    path('travel-insurance-quote/', TravelInsuranceQuotes.as_view(), name='travel-insurance-quote'),
]