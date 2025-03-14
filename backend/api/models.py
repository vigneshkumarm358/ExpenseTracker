from django.db import models
from django.contrib.auth.models import AbstractUser



#this is my custome model for User modle - (user can upload photo, number, membership also )
class CustomUser(AbstractUser):

    GOLD = 'gold'
    SILVER = 'silver'
    PLATINUM = 'platinum'

    MEMBERSHIP_CHOICES = [
        (GOLD, 'Gold'),
        (SILVER, 'Silver'),
        (PLATINUM, 'Platinum'),
    ]

    
    phone_number = models.CharField(max_length=15,  blank=True, null=True)
    profile_picture = models.ImageField(upload_to='images/', blank=True, null=True)
    membre_ship = models.CharField(max_length=10, choices=MEMBERSHIP_CHOICES, default=GOLD)

    def __str__(self):
        return self.username




# this models for track your expense

class Income(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    source = models.CharField(max_length=255)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.amount} - {self.source}"


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    
class Expense(models.Model):

    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(blank=True, null=True)
    date = models.DateField(auto_now_add=True)
    payment_method = models.CharField(max_length=50, choices=[('Cash', 'Cash'), ('Card', 'Card'), ('UPI', 'UPI')], default='Cash')

    def __str__(self):
        return f"{self.user.username} - {self.amount} - {self.category}"