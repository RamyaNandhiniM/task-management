import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { ITaskListModel } from 'src/app/shared/task-model';

@Component({
  selector: 'app-task-actions',
  templateUrl: './task-actions.component.html',
  styleUrls: ['./task-actions.component.css']
})
export class TaskActionsComponent implements OnInit {

  constructor(private taskService: TaskService, private route: Router) { }

  ngOnInit(): void {
  }
  taskDetails: ITaskListModel = {
    id: 0,
    name: '',
    number: '',
    assignedTo: '',
    dueDate: '',
    assignedOn: '',
    status: '',
    priority: ''
  }
  saveTask() {
    this.taskService.addTask(this.taskDetails);
    this.route.navigate(['task/list']);
  }
}
