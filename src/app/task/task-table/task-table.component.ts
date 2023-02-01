import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { IdNamePair, ITaskListModal } from 'src/app/shared/task-modal';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {

  constructor(private router: Router, private taskService: TaskService) {
    this.taskService.getTasks().subscribe((res) => {
      this.taskList = res
    })
  }

  ngOnInit(): void {

  }
  searchText = "";

  showImage = false;
  userName = "Remya Nandhini";

  @Input()
  filterType: string = "MyTask";

  taskList: ITaskListModal[] = []

  get filteredTaskList(): ITaskListModal[] {
    if (this.filterType == "MyTask") return this.taskList.filter(x => x.name.includes(this.searchText)
      && x.assignedTo.users.some(x => x.name == this.userName)
    );
    return this.taskList.filter(x => x.name.includes(this.searchText));
  }

  clearSearch(): void {
    this.searchText = "";
  }
  goToDetails(id: string): void {
    this.router.navigate(['/task/details', { id: id }])
  }
  getUsers(users: IdNamePair[]): string {
    let usernames = '';
    users.forEach(element => {
      usernames = usernames.concat(element.name, ',')
    });
    return usernames.replace(/,(\s+)?$/, "");
  }
}
