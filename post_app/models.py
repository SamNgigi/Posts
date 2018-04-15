from django.db import models

# from django.contrib.auth.models import User
# import datetime as dt


# Create your models here.
class Post(models.Model):
    content = models.CharField(max_length=100)
    timestamp = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    # author = models.ForeignKey(User, related_name="posts",
    #                            on_delete=models.CASCADE, null=True)

    class Meta:
        ordering = ['-updated']

    def __str__(self):
        return self.content
