from django.urls import path, include
from rest_framework import routers
from .views import TaskView

# El router crea las rutas automáticas (GET, POST, PUT, DELETE)
router = routers.DefaultRouter()
router.register(r'tasks', TaskView, 'tasks')

urlpatterns = [
    path('api/v1/', include(router.urls)),
]