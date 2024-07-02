from rest_framework import serializers
from .models import Post
from users.models import User
from users.serializers import UserSerializer

class PostSerializer(serializers.ModelSerializer):
    author = UserSerializer()

    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'post_date', 'author']
