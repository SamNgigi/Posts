from rest_framework import serializers
# from django.utils.timesince import timesince

from ..models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'
