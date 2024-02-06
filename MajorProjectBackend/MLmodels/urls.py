from django.urls import path
from . import views

app_name = 'MLmodels'

urlpatterns = [
    path('dataset/', views.dataset, name='dataset'),
    path('process/', views.predict, name='predict'),
]


