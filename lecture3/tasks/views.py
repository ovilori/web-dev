from django import forms
from django.http.response import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

#tasks = []

#Creating form to add new tasks.
#defining the class

class NewTaskForm(forms.Form):
    task = forms.CharField(label="New Task")
    priority = forms.IntegerField(label="Priority", min_value=1, max_value=10)

# Create your views here.
def index(request):
    if "tasks" not in request.session:
        request.session["tasks"] = []
    return render(request, "tasks/index.html", {
        #"tasks":tasks
        "tasks": request.session["tasks"]
    })

def add(request):
    #getting all the data submitted by the user.
    if request.method == "POST":
        form = NewTaskForm(request.POST)
        #checks if the form has no errors
        if form.is_valid():
            task = form.cleaned_data["task"]
            #tasks.append(task)
            request.session["tasks"] += [task]
            return HttpResponseRedirect(reverse("tasks:index"))
        else:
            return render(request, "tasks/add.html", {
                #return the existing data form to the user
                "form": form
            })
    return render(request, "tasks/add.html", {
        "form": NewTaskForm()
    })
