import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  mytaskClass: string = "nav-link active";
  alltaskClass: string = "nav-link";
  taskFilter: string = "MyTask";

  tabSelect(tabName: string): void {
    if (tabName == "MyTask") {
      this.mytaskClass = "nav-link active";
      this.alltaskClass = "nav-link";
      this.taskFilter = "MyTask";
    }
    if (tabName == "AllTask") {
      this.mytaskClass = "nav-link";
      this.alltaskClass = "nav-link active";
      this.taskFilter = "AllTask";
    }
  }
  goToAdd(): void {
    this.router.navigate(['task/add'])
  }
}
