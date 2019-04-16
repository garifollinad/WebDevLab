import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskListByIdComponent} from './task-list-by-id/task-list-by-id.component';
import {TaskListByIdTasksComponent} from './task-list-by-id-tasks/task-list-by-id-tasks.component';
import {TasksByIdComponent} from './tasks-by-id/tasks-by-id.component';
import {MainComponent} from './main/main.component';
import {HttpClientModule} from '@angular/common/http';
import {ProviderService} from './data/services/provider.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskListByIdComponent,
    TaskListByIdTasksComponent,
    TasksByIdComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
