from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
  path('home/',views.home,name="home"),
  path('selecttemplates/',views.template_selection, name="template-selection"),
  path('camera/',views.camera,name="camera"),
  path('preview/',views.preview,name="preview"),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)