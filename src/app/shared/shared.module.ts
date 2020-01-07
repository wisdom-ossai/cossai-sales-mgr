import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonRowComponent, DialogComponent } from './components';
import { ExportDirective } from './dirctives/export.directive';



@NgModule({
  declarations: [ButtonRowComponent, DialogComponent, ExportDirective],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,

    ButtonRowComponent,
    DialogComponent,
    ExportDirective
  ],
  entryComponents: [
    DialogComponent
  ],
})
export class SharedModule { }
