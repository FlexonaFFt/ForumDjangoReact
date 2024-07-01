from rest_framework import viewsets
from .models import Post
from .serializers import MyModelSerializer
#type: ignore

class MyModelViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = MyModelSerializer
