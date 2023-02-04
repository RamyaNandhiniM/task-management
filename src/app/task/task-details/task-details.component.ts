import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { IFileLinkModal, IFilesModal } from 'src/app/shared/files-modal';
import { ITaskDetailsModal, ITaskListModal } from 'src/app/shared/task-modal';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private taskService: TaskService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.taskService.getTaskById(this.id).subscribe((res) => {
      this.taskDetails = res;
    })
    this.taskService.getFiles(this.id).subscribe((res) => {
      this.taskFiles = res;
    })
  }
  id: string = '';
  taskDetails: ITaskDetailsModal | undefined = {
    id: '',
    name: '',
    number: '',
    description: '',
    assignedTo: {
      users: [],
      teams: []
    },
    facility: undefined,
    asset: undefined,
    status: '',
    type: undefined,
    priority: undefined,
    remainder: undefined,
    dueDate: undefined,
    rrule: null,
    featureName: '',
    featureTitle: '',
    featureId: '',
    subFeatureId: '',
    subTasks: [],
    assignedBy: undefined,
    assignedOn: undefined,
    checkListId: '',
    checkListFieldValues: undefined
  }
  taskFiles: IFilesModal[] = [];
  ngOnInit(): void {
  }

  navigateBack(): void {
    this.router.navigate(['/task/list'])
  }
  navigateToEdit(): void {
    this.router.navigate(['/task/edit', { id: this.id }])
  }
  toggleMenu() {
    document.getElementById("dropdown-items").classList.toggle("show")
  }
}
