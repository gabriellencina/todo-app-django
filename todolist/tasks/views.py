from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse


from .models import Task

def HelloWorld(request):
    return HttpResponse('Hello world!')

def tasklist (request):
    tasks = Task.objects.all()
    return render(request, 'tasks/list.html', {'tasks': tasks})


def yourName(request, name):
    return render(request, 'tasks/yourname.html', {'name': name})    

def taskView(request, id):
    task = get_object_or_404(Task, pk=id)
    return render(request, 'tasks/task.html', {'task': task})