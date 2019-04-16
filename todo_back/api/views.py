from django.shortcuts import render
from django.http import JsonResponse
from api.models import *


def getTaskLists(request):
    taskList = TaskList.objects.all()
    json = [obj.to_json() for obj in taskList]
    return JsonResponse(json, safe=False)

def getTaskListsById(request, id):
    try:
        taskList = TaskList.objects.get(id=id)
    except TaskList.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, safe=False)

    return JsonResponse(taskList.to_json(), safe=False)


def getTaskListsByIdTasks(request, id):
    try:
        task_list = TaskList.objects.get(id=id)
    except TaskList.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, safe=False)

    tasks = task_list.task_set.all()
    json_tasks = [ts.to_json_short() for ts in tasks]

    return JsonResponse(json_tasks, safe=False)


def getTasksById(request, id):
    try:
        task = Task.objects.get(id=id)
    except Task.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, safe=False)

    return JsonResponse(task.to_json(), safe=False)

