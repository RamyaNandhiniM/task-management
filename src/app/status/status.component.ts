import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  text: string = '';

  get styleClass(): string {
    if (this.text == "Closed" || this.text == "Low") return "low-close-priority";
    else if (this.text == "Pending" || this.text == "Medium") return "medium-pending-priority";
    else if (this.text == "Overdue" || this.text == "High") return "high-overdue-priority";
    return "";
  }
}
