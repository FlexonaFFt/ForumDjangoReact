from rest_framework import viewsets
from .models import MyModel
from .serializers import MyModelSerializer
#type: ignore

class MyModelViewSet(viewsets.ModelViewSet):
    queryset = MyModel.objects.all()
    serializer_class = MyModelSerializer
