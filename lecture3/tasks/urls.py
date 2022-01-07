from django.urls import path
from . import views

#name to uniquely identify the URLs in tasks.
app_name = "tasks"
urlpatterns = [
    path("", views.index, name="index"),
    path("add", views.add, name="add")
    
]