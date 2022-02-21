from django.contrib import admin

from .models import deliveries, matches
# Register your models here.
admin.site.register(deliveries)
admin.site.register(matches)