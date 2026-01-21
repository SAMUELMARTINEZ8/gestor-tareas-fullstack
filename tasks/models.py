from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=200)          # Título de la tarea
    description = models.TextField(blank=True)        # Descripción (opcional)
    done = models.BooleanField(default=False)         # ¿Está hecha? Por defecto No.
    created_at = models.DateTimeField(auto_now_add=True) # Fecha automática

    def __str__(self):
        return self.title