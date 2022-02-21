#from attr import fields
from rest_framework import serializers
from .models import matches, deliveries

class matchesSerializer(serializers.ModelSerializer):
    class Meta:
        model= matches
        fields='__all__'

class deliveriesSerializer(serializers.ModelSerializer):
    class Meta:
        model= deliveries
        fields='__all__'