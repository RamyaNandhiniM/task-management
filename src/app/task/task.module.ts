import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskTableComponent } from './task-table/task-table.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskPageComponent } from './task-page.component';
import { TaskActionsComponent } from './task-actions/task-actions.component';
import { MasterAddComponent } from './task-actions/master-add/master-add.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    TaskListComponent,
    TaskTableComponent,
    TaskDetailsComponent,
    TaskPageComponent,
    TaskActionsComponent,
    MasterAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class TaskModule { }
