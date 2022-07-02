from django.http import HttpResponse, HttpResponseNotFound
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'build/index.html') #HttpResponse("Soundle home page")