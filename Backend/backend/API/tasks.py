from celery import shared_task
import redis
import requests 

r = redis.StrictRedis(host='localhost', port=6379, db=0)
# TODO: This only saves for now, need to add the API call to the insurance provider
@shared_task
def save_car_details(registration):
    r.hset('car:' + registration)
    return "Saved"


# TODO: Add the rest of the save functions
@shared_task
def personal_details(user_details):
    r.hset('user:' + user_details)
    return "Saved"

@shared_task
def save_form_data(insurance_type, user_details):

    form_data = {
        'insurance_type': insurance_type,
        'user_details': user_details,
    }

    for key, value in form_data.items():
        r.hset('form:', key, value)


@shared_task
def fetch_insurance_quote(insurance_type, user_details):
    # Need to create an API request but need API specifications.
    pass

@shared_task
def fetch_car_details(registration):
    
    dmv_api = "https://apidetails"

    # Send the request
    response = requests.get(dmv_api, params={"registration": registration})

    # Handle response
    car_details = response.json()
    for key, value in car_details.items():
        r.hset('car:' + registration, key, value)

    return car_details

@shared_task
def request_regular_quote(registration):
    # API logic for regular insurance quote request
    provider_api = "https://api.insuranceprovider"

    data = {
        "registration": registration,
    }

    response = requests.post(provider_api, data=data)
    r.hset('car:' + registration, 'quote', response.json())

    print(response.json())
    return response.json()

@shared_task
def request_comprehensive_quote(registration, additional_info):
    # API logic for comprehensive insurance quote request
    provider_api = "https://api.insuranceprovider.comcomprehensive"

    data = {
        "registration": registration,
        "additional_info": additional_info,
    }

    response = requests.post(provider_api, data=data)
    r.hset('car:' + registration, 'quote', response.json())
    print(response.json())
    return response.json()

@shared_task
def request_combined_quote(registration, additional_info):
    # API logic for combined insurance quote request
    provider_api = "https://api.insuranceprovider.com/combined"

    data = {
        "registration": registration,
        "additional_info": additional_info,
    }

    response = requests.post(provider_api, data=data)
    r.hset('car:' + registration, 'quote', response.json())
    print(response.json())
    return response.json()


@shared_task
def fetch_travel_insurance_quote(geographic_area, user_details):
    provider_api = "https://api.insuranceprovider.com/travel"

    data = {
        "geographic_area": geographic_area,
        "user_details": user_details,
    }
    response = requests.post(provider_api, data=data)
    r.hset('travel:' + geographic_area, 'quote', response.json())
    print(response.json()) # Temp holding and testing
    return response.json() # Temp holding and testing


