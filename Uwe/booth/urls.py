from django.urls import path
from . import views

urlpatterns = [
  path('home/',views.home,name="home"),
  path('selecttemplates/',views.template_selection, name="template-selection"),
  path('camera/',views.camera,name="camera"),
  path('preview/',views.preview,name="preview"),
]