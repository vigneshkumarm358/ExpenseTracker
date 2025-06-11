from rest_framework import serializers
from .models import CustomUser, Income
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import authenticate, get_user_model

User = get_user_model()

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'phone_number', 'password', 'profile_picture']
        extra_kwargs = {'password': {'write_only': True}}  

    def create(self, validated_data):
        password = validated_data.pop('password')  
        user = CustomUser(**validated_data)
        user.set_password(password) 
        user.save() 

        return user



class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        login_value = attrs.get('email') 
        password = attrs.get('password')

        try:
            user_obj = User.objects.get(email=login_value)
        except User.DoesNotExist:
            try:
                user_obj = User.objects.get(username=login_value)
            except User.DoesNotExist:
                user_obj = None

        if user_obj is not None:
            user = authenticate(username=user_obj.email, password=password)  
            if user:
                refresh = self.get_token(user)
                return {
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                    'user_id': user.id,
                    'email': user.email,
                    'username': user.username
                }

        raise serializers.ValidationError('Invalid email/username or password')


class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = '__all__'
        extra_kwargs = {"user" : {"read_only":True} }