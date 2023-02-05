import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  closDialog = new EventEmitter();

  onDialogClose(value) {
    console.log("on close")
    this.closDialog.emit(value);
  }
}
