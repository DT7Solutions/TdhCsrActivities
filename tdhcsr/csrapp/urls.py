from django.urls import path
from .views import Home,Csractivities
urlpatterns = [
    path('', Home, name="home"),
    path('apply/', Csractivities, name="apply"),
]