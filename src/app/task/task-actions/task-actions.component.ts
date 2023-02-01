import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { ITaskListModal } from 'src/app/shared/task-modal';

@Component({
  selector: 'app-task-actions',
  templateUrl: './task-actions.component.html',
  styleUrls: ['./task-actions.component.css']
})
export class TaskActionsComponent implements OnInit {

  constructor(private taskService: TaskService, private route: Router) { }

  ngOnInit(): void {
    this.taskService.getFacilities().subscribe((res) => this.facilityList = res);
  }
  taskDetails: ITaskListModal = {
    id: 0,
    name: '',
    number: '',
    assignedTo: '',
    dueDate: '',
    assignedOn: '',
    status: '',
    priority: {
      id: '',
      name: ''
    }
  }
  facilityList = [];
  saveTask() {
    this.taskService.addTask(this.taskDetails);
    this.route.navigate(['task/list']);
  }

}
