
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from .views import ProductView
route = routers.DefaultRouter()
route.register("",ProductView,basename='productView')
urlpatterns = [
    path('',include(route.urls)),
]
