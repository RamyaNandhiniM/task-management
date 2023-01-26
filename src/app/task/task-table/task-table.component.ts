import { Component, Input, OnInit } from '@angular/core';
import { ITaskListModel } from 'src/app/shared/task-model';

import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {

  constructor(private router: Router, private taskService: TaskService) { }

  ngOnInit(): void {

  }
  searchText = "";

  showImage = false;
  userName = "Ramya Nandhini";

  @Input()
  filterType: string = "MyTask";

  get taskList(): ITaskListModel[] {
    return this.taskService.taskList;
  }

  get filteredTaskList(): ITaskListModel[] {
    if (this.filterType == "MyTask") return this.taskList.filter(x => x.name.includes(this.searchText)
      && x.assignedTo == this.userName);
    return this.taskList.filter(x => x.name.includes(this.searchText));
  }

  clearSearch(): void {
    this.searchText = "";

  }
  goToDetails(id: number): void {
    this.router.navigate(['/task/details', { id: id }])
  }
}
