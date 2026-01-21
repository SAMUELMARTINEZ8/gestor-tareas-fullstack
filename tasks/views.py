from rest_framework import viewsets
from .serializers import TaskSerializer
from .models import Task

# Esto crea todo el CRUD automáticamente (GET, POST, PUT, DELETE)
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()