from django.contrib import admin
from api.models import *


admin.site.register(CustomUser)
admin.site.register(Expense)
admin.site.register(Category)
admin.site.register(Income)