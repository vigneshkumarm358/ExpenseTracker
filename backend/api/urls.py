from django.urls import path
from  api.views import *

    
urlpatterns = [
   
    path('register/', UserRegisterView.as_view()),
    path('add-income', IncomeView.as_view()),
]