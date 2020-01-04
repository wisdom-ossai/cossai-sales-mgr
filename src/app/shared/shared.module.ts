import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonRowComponent } from './button-row/button-row.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [ButtonRowComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ButtonRowComponent
  ]
})
export class SharedModule { }
