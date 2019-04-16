from django.db import models
import datetime
now = datetime.datetime.now()

class TaskList(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return '{}: {}'.format(self.id, self.name)
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

class Task(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(now)
    due_on = models.DateTimeField(auto_now=False, auto_now_add=False)
    status = models.CharField(max_length=100)
    task_list = models.ForeignKey(TaskList, on_delete=models.CASCADE)
    def __str__(self):
        return '{}: {}'.format(self.id, self.name)
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'created_at': self.created_at,
            'due_on': self.due_on,
            'status': self.status
        }
    def to_json_short(self):
        return{
            'id': self.id,
            'name': self.name,
            'status': self.status,
        }
