from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    #return HttpResponse("Hello, world!")
    return render(request, "hello/index.html")

def olamide(request):
    return HttpResponse("Hello, Olamide!")

def greet(request, name):
    #return HttpResponse(f'Hello {name.capitalize()}!')
    return render(request, "hello/greet.html", {
        "name":name.capitalize()
    })
