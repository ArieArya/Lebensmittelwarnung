import urllib
import requests
import boto3
import json
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from opensearchpy import OpenSearch, RequestsHttpConnection, AWSV4SignerAuth
from .secrets import API_KEY, OPENSEARCH_IAM_ACCESS_KEY, OPENSEARCH_IAM_SECRET_KEY, OPENSEARCH_HOST

# POST request to external API
def getResponseFromExternalAPI(body):
    url = 'https://megov.bayern.de/verbraucherschutz/baystmuv-verbraucherinfo/rest/api/warnings/merged'
    headers = {
        'accept': 'application/json',
        'Authorization': API_KEY,
        'Content-Type': 'application/json'
    }
    return requests.post(url, headers=headers, json=body)

# URL parser
def urlParse(queryString):
    try:
        res = {}
        sep = queryString.split("&")
        for item in sep:
            key, val = item.split("=")
            val = urllib.parse.unquote(val, encoding='utf-8', errors='replace').replace("\"", "")
            if key == "fq":
                res[key] = [val]
            else:
                res[key] = val
        return res
    except Exception as e:
        print(e)

# 1. Search API
# GET /api/search/{}/
# requires page number, number of items per page, and state filters
@api_view(['GET'])
def search(request, query):
    try:
        # define search query
        query = {
            "size": 30,
            "sort": {
                "publishedDate": {
                    "order": "desc"
                }
            },
            "query": {
                "multi_match": {
                    "query": query,
                    "fuzziness": 1
                }
            }
        }
        # Sign HTTP Requests to OpenSearch
        host = OPENSEARCH_HOST 
        region = 'eu-west-2' 
        session = boto3.Session(
            aws_access_key_id=OPENSEARCH_IAM_ACCESS_KEY,
            aws_secret_access_key=OPENSEARCH_IAM_SECRET_KEY
        )
        credentials = session.get_credentials()
        auth = AWSV4SignerAuth(credentials, region)
        index_name = 'docs'
        client = OpenSearch(
            hosts = [{'host': host, 'port': 443}],
            http_auth = auth,
            use_ssl = True,
            verify_certs = True,
            connection_class = RequestsHttpConnection
        )
        response = client.search(
            body = query,
            index = index_name
        )
        return Response(response, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'message': e}, status=status.HTTP_400_BAD_REQUEST)


# 2. Food warning API
# GET /api/food/?rows={}&sort={}&start={}&fq={}
# e.g. GET /api/food/?rows=500&sort="publishedDate desc, title asc"&start=11&fq="publishedDate > 1630067654000"
@api_view(['GET'])
def getFoodWarning(request):
    try:
        parsedBody = {"food": urlParse(request.META['QUERY_STRING'])}
        response = getResponseFromExternalAPI(parsedBody)
        if response.status_code == 400:
            return Response({'message': response.json()}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(response.json(), status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'message': e}, status=status.HTTP_400_BAD_REQUEST)

# Product warning API
# 3. GET /api/products/?rows={}&sort={}&start={}&fq={}
# e.g. GET /api/products/?rows=500&sort="publishedDate desc, title asc"&start=11&fq="publishedDate > 1630067654000"
@api_view(['GET'])
def getProductWarning(request):
    try:
        parsedBody = {"products": urlParse(request.META['QUERY_STRING'])}
        response = getResponseFromExternalAPI(parsedBody)
        if response.status_code == 400:
            return Response({'message': response.json()}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(response.json(), status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'message': e}, status=status.HTTP_400_BAD_REQUEST)