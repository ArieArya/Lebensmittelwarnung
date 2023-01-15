import urllib
import requests
import boto3
import json
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from opensearchpy import OpenSearch, RequestsHttpConnection, AWSV4SignerAuth
from .secrets import OPENSEARCH_IAM_ACCESS_KEY, OPENSEARCH_IAM_SECRET_KEY, OPENSEARCH_HOST

# Common OpenSearch function
def queryOpenSearch(query):
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
    return response

# 1. Search API - GET
# GET /api/search/{}/
@api_view(['GET'])
def searchGet(request, query):
    try:
        # define search query
        query = {
            "size": 30,
            "query": {
                "multi_match": {
                    "query": query,
                    "fuzziness": 1
                }
            }
        }
        return Response(queryOpenSearch(query), status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'message': e}, status=status.HTTP_400_BAD_REQUEST)

# 2. Search API - POST
# GET /api/search/
@api_view(['POST'])
def searchPost(request):
    try:
        # extract query from body
        query = request.body
        return Response(queryOpenSearch(query), status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'message': e}, status=status.HTTP_400_BAD_REQUEST)