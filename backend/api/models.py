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

    