import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskActionsComponent } from './task/task-actions/task-actions.component';
import { TaskEditGuard } from './task/task-actions/task-edit.guard';
import { TaskDetailGuard } from './task/task-details/task-detail.guard';
import { TaskDetailsComponent } from './task/task-details/task-details.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskPageComponent } from './task/task-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'task',
    component: TaskPageComponent,
    children: [
      {
        path: 'list', component: TaskListComponent
      },
      {
        path: 'details', component: TaskDetailsComponent, canActivate: [TaskDetailGuard]
      },
      {
        path: 'add', component: TaskActionsComponent
      },
      {
        path: 'edit', component: TaskActionsComponent, canActivate: [TaskEditGuard]
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
