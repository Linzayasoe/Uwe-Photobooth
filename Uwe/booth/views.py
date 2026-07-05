from django.shortcuts import render

# Create your views here.
def home(request):
  return render(request,'booth/home.html')

def template_selection(request):
  return render(request,'booth/template_selection.html')

def camera(request):
  return render(request,'booth/camera.html')

def preview(request):
  return render(request,'booth/preview.html')