from django.urls import path
from  api.views import *

    
urlpatterns = [
   
    path('register/', UserRegisterView.as_view()),
    path('add-income', IncomeView.as_view()),
    path('edit-income/<int:pk>', IncomeEditView.as_view()),
    path('category', CategoryView.as_view()),
    path('category-del/<int:pk>', CategoryDeleteView.as_view()),
    path('transactions', TransactionsView.as_view()),
]