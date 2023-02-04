import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { ITaskDetailsModal, ITaskPayloadModal } from 'src/app/shared/task-modal';

@Component({
  selector: 'app-task-actions',
  templateUrl: './task-actions.component.html',
  styleUrls: ['./task-actions.component.css']
})
export class TaskActionsComponent implements OnInit {

  constructor(private taskService: TaskService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.taskService.getFacilities().subscribe((res) => this.facilityList = res);
    this.taskService.getAssests().subscribe((res) => this.assetList = res);
    this.taskService.getRemainders().subscribe((res) => this.remainders = res);
    this.taskService.getCheckList().subscribe((res) => this.checklists = res);
    this.taskService.getTaskTypes().subscribe((res) => this.taskTypes = res);
    this.taskService.getUsers().subscribe((res) => this.users = res);
    this.taskService.getTeams().subscribe((res) => this.teams = res);

    if (window.location.pathname.includes('edit') && this.router.snapshot.paramMap.get('id')) {

      this.taskService.getTaskById(this.router.snapshot.paramMap.get('id')).subscribe((res) => {
        this.convertDetailToPayloadModal(res);
      });
    }
  }
  taskDetails: ITaskPayloadModal = {
    id: undefined,
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
    if (window.location.pathname.includes('edit') && this.router.snapshot.paramMap.get('id')) {
      this.taskService.update(this.taskDetails.id, this.taskDetails)
        .subscribe(() => {
          this.route.navigate(['task/list']);
        });
    }
    else {
      this.taskService.addTask(this.taskDetails)
        .subscribe(() => {
          this.route.navigate(['task/list']);
        });
    }

  }
  openDialog(): void {

  }

  convertDetailToPayloadModal(details: ITaskDetailsModal) {
    this.taskDetails.id = details?.id;
    this.taskDetails.name = details.name;
    this.taskDetails.description = details.description;
    this.taskDetails.assignedMembers = details.assignedTo.users.map((u) => {
      return u?.id;
    });
    this.taskDetails.assignedTeams = details.assignedTo.teams.map((t) => {
      return t?.id;
    })
    this.taskDetails.facilityId = details.facility?.id;
    this.taskDetails.typeId = details.type?.id;
    this.taskDetails.priority = details.priority?.id;
    this.taskDetails.remainder = details.remainder?.id;
    this.taskDetails.dueDate = details.dueDate;
    this.taskDetails.subTasks = details.subTasks;
    this.taskDetails.AssetId = details.asset?.id;
  }
}
