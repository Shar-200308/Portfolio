from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from rest_framework import generics
from .models import ContactMessage
from .serializers import ContactMessageSerializers

class ContactMessageCreateView(generics.ListCreateAPIView):
    queryset = ContactMessage.objects.all().order_by('-created_at')
    serializer_class = ContactMessageSerializers

    def perform_create(self, serializer):
        instance = serializer.save()

        # Send notification email
        try:
            subject = f"Portfolio Contact: {instance.subject}"
            body = (
                f"You received a new message from your portfolio contact form!\n\n"
                f"Sender Name: {instance.name}\n"
                f"Sender Email: {instance.email}\n"
                f"Subject: {instance.subject}\n\n"
                f"Message:\n{instance.message}\n"
            )
            from_email = getattr(settings, "DEFAULT_FROM_EMAIL", "noreply@portfolio.com")
            send_mail(
                subject,
                body,
                from_email,
                ["sharan2003murali@gmail.com"],
                fail_silently=True,
            )
        except Exception:
            pass

