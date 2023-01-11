from django.shortcuts import render
import pathlib

def index(request):
    print(pathlib.Path(__file__).parent.resolve())
    return render(request, 'frontend/index.html')