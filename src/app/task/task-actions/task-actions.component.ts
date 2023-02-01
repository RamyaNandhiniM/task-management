import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { ITaskPayloadModal } from 'src/app/shared/task-modal';

@Component({
  selector: 'app-task-actions',
  templateUrl: './task-actions.component.html',
  styleUrls: ['./task-actions.component.css']
})
export class TaskActionsComponent implements OnInit {

  constructor(private taskService: TaskService, private route: Router) { }

  ngOnInit(): void {
    this.taskService.getFacilities().subscribe((res) => this.facilityList = res);
    this.taskService.getAssests().subscribe((res) => this.assetList = res);
    this.taskService.getRemainders().subscribe((res) => this.remainders = res);
    this.taskService.getCheckList().subscribe((res) => this.checklists = res);
    this.taskService.getTaskTypes().subscribe((res) => this.taskTypes = res);
    this.taskService.getUsers().subscribe((res) => this.users = res);
    this.taskService.getTeams().subscribe((res) => this.teams = res);
  }
  taskDetails: ITaskPayloadModal = {
    name: '',
    description: '',
    assignedMembers: [],
    assignedTeams: [],
    facilityId: '',
    typeId: 0,
    priority: 0,
    remainder: 0,
    dueDate: undefined,
    subTasks: [],
    rRuleString: null,
    checkListFieldValues: undefined,
    AssetId: ''
  }
  facilityList = [];
  assetList = [];
  remainders = [];
  taskTypes = [];
  teams = [];
  users = [];
  checklists = [];
  saveTask() {
    console.log(this.taskDetails)
    this.taskService.addTask(this.taskDetails).subscribe(() => {
      this.route.navigate(['task/list']);
    });
  }

}
