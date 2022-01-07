from django.shortcuts import render
import datetime
# Create your views here.
def index(request):
    now = datetime.datetime.now()
    return render(request, "birthday/index.html", {
        "birthday": now.month==1 and now.day == 4
        #"birthday": now.month==25 and now.day == 3
    }) 
