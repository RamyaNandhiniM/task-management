import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplacePipe } from './ReplacePipe';
import { StatusComponent } from './status/status.component';
import { ModalComponent } from './modal/modal.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReplacePipe,
    StatusComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    ReplacePipe,
    StatusComponent,
    ModalComponent,

  ]
})
export class SharedModule { }
