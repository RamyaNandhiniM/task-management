import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-master-add',
  templateUrl: './master-add.component.html',
  styleUrls: ['./master-add.component.css']
})
export class MasterAddComponent implements OnInit, OnChanges {

  constructor(private masterService: MasterService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.openDialog) {
      if (this.type == 'Task') {
        this.title = "New Task Type";
      }
      else if (this.type == 'Remainder') {
        this.title = "New Expiration Alerts"
      }
      var modalElement = document.getElementById("modal");
      modalElement.style.display = "block";

    }
  }

  ngOnInit(): void {
  }

  @Input() type: string;
  @Input() openDialog: boolean = false;
  @Output() closeDialogBox = new EventEmitter()
  title = '';
  taskModal = {
    taskName: "Task Type",
    payload: {
      name: ''
    }
  }
  remaiderModal = {
    alertName: "Expiration Alerts",
    valueName: "Value (in days)",
    payload: {
      name: '',
      value: ''
    }
  }

  saveModalValue() {
    if (this.type == 'Task') {
      this.masterService.postTaskType(this.taskModal.payload).subscribe(() => this.closeDialog());
    }
    else if (this.type == 'Remainder') {
      this.masterService.postExpirationAlert(this.remaiderModal.payload).subscribe(() => this.closeDialog());
    }
  }

  closeDialog(): void {
    var modalElement = document.getElementById("modal");
    modalElement.style.display = "none";
    this.closeDialogBox.emit(this.type);
  }

}
