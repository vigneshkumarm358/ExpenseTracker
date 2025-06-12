from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import *
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from api.models import *

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


DEFAULT_CATEGORIES = ["Food", "Transport", "Shopping", "Health", "Entertainment"]

class UserRegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]
    def perform_create(self, serializer):
        user = serializer.save()
        for category_name in DEFAULT_CATEGORIES:
            Category.objects.create(user=user, name=category_name)


class IncomeView(generics.ListCreateAPIView):
    serializer_class = IncomeSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        get_user = self.request.user
        return Income.objects.filter(user= get_user)
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(user=self.request.user)
        else:
            print(serializer.errors)

class IncomeEditView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = IncomeSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = 'pk' 

    def get_queryset(self):
        return Income.objects.filter(user=self.request.user)

    def perform_update(self, serializer):
        if serializer.is_valid():
            serializer.save(user=self.request.user)
        else:
            print(serializer.errors)

class CategoryView(generics.ListCreateAPIView):
    serializer_classes = CategorySerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        get_user = self.request.user
        return Category.objects.filter(user=get_user)