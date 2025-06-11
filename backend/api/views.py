from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import CustomTokenObtainPairSerializer, RegisterSerializer, IncomeSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from api.models import *

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


class UserRegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

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