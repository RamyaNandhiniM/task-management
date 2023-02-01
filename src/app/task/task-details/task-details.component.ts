import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { ITaskListModal } from 'src/app/shared/task-modal';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private taskService: TaskService) {
    this.taskDetails = this.taskService.getTaskById(Number(this.route.snapshot.paramMap.get('id')))
  }

  taskDetails: ITaskListModal | undefined = {
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

  ngOnInit(): void {
  }

  navigateBack() {
    this.router.navigate(['/task/list'])
  }
}
