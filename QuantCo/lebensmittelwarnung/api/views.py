from rest_framework import status
from rest_framework.response import Response

# Create your views here.
def someView(request):
    return Response({'message': 'Success'}, status=status.HTTP_200_OK)