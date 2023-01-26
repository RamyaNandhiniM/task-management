import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReplacePipe } from 'src/app/shared/ReplacePipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { StatusComponent } from './status/status.component';
import { TaskTableComponent } from './task/task-table/task-table.component';
import { TaskDetailsComponent } from './task/task-details/task-details.component';
import { TaskPageComponent } from './task/task-page.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskActionsComponent } from './task/task-actions/task-actions.component'

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    ReplacePipe,
    StatusComponent,
    TaskTableComponent,
    TaskDetailsComponent,
    TaskPageComponent,
    TaskActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
