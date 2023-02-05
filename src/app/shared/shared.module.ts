import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplacePipe } from './ReplacePipe';
import { StatusComponent } from './status/status.component';
import { ModalComponent } from './modal/modal.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    // ReplacePipe,
    // StatusComponent,
    // ModalComponent
  ],
  imports: [
    // ReplacePipe,
    // StatusComponent,
    // ModalComponent,
    CommonModule
  ],
  exports: [

  ]
})
export class SharedModule { }
