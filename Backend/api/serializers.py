from rest_framework import serializers
from .models import ContactMessage

class ContactMessageSerializers(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ["name", "email", "subject", "message"]

        