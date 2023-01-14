import requests
import json
import shlex
import subprocess
from .secrets import API_KEY
from .secrets import OPENSEARCH_URL

# Make new POST request for updated data
url = 'https://megov.bayern.de/verbraucherschutz/baystmuv-verbraucherinfo/rest/api/warnings/merged'
headers = {
    'accept': 'application/json',
    'Authorization': API_KEY,
    'Content-Type': 'application/json'
}
body = {
    "food": {
        "rows": 10000,
        "sort": "publishedDate desc, title asc",
        "start": 0
    },
    "products": {
        "rows": 10000,
        "sort": "publishedDate desc, title asc",
        "start": 0
    }
}
response = requests.post(url, headers=headers, json=body).json()['response']['docs']

# Update values in OpenSearch
for i, res in enumerate(response):
    cmd = f'''
        curl -XPUT '{OPENSEARCH_URL}/docs/_doc/{i}' -d '{json.dumps(res).replace('\'', ' ')}' -H 'Content-Type: application/json'
        '''
    args = shlex.split(cmd)
    process = subprocess.Popen(args, shell=False, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    stdout, stderr = process.communicate()