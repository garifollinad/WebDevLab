import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AppComponent } from './app.component';
import {MainComponent} from './main/main.component';
import {TaskListByIdComponent} from './task-list-by-id/task-list-by-id.component';
import {TaskListByIdTasksComponent} from './task-list-by-id-tasks/task-list-by-id-tasks.component';
import {TasksByIdComponent} from './tasks-by-id/tasks-by-id.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'tasklists', component: TaskListComponent},
  {path: 'tasklists/:id', component: TaskListByIdComponent},
  {path: 'tasklists/:id/tasks', component: TaskListByIdTasksComponent},
  {path: 'tasks/:id', component: TasksByIdComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
