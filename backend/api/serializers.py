from rest_framework import serializers
from api.models import CustomUser


from rest_framework import serializers
from .models import CustomUser

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'phone_number', 'password', 'profile_picture', 'membre_ship']
        extra_kwargs = {'password': {'write_only': True}}  

    def create(self, validated_data):
        password = validated_data.pop('password')  
        user = CustomUser(**validated_data)
        user.set_password(password) 
        user.save() 

        return user

