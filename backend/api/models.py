from django.db import models
from django.contrib.auth.models import AbstractUser



class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)    
    phone_number = models.CharField(max_length=15,  blank=True, null=True)
    profile_picture = models.ImageField(upload_to='images/', blank=True, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.username




# this models for track your expense

class Income(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='author')
    amount = models.IntegerField()
    source = models.CharField(max_length=255)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.amount} - {self.source}"


class Category(models.Model):
    name = models.CharField(max_length=100)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="categories")

    class Meta:
        unique_together = ('name', 'user') 

    def __str__(self):
        return self.name

    
class Expense(models.Model):

    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    category = models.CharField(max_length=30, null=True, blank=True)
    amount = models.IntegerField()
    description = models.TextField(blank=True, null=True)
    date = models.DateField(auto_now_add=True)
    def __str__(self):
        return f"{self.user.username} - {self.amount} - {self.category}"