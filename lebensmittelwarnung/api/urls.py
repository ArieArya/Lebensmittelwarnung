from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path, include
from . import views

urlpatterns = [
    path('search/', views.searchPost),
    path('search/<str:query>/', views.searchGet)
]