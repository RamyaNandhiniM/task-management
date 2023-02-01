import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { ITaskDetailsModal, ITaskListModal } from 'src/app/shared/task-modal';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private taskService: TaskService) {
    this.taskService.getTaskById(this.route.snapshot.paramMap.get('id')).subscribe((res) => {
      this.taskDetails = res;
    })
  }

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

  ngOnInit(): void {
  }

  navigateBack() {
    this.router.navigate(['/task/list'])
  }
}
