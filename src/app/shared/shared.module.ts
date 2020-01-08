import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonRowComponent, DialogComponent } from './components';
import { ExcelExportDirective } from './dirctives/excel-export.directive';



@NgModule({
  declarations: [ButtonRowComponent, DialogComponent, ExcelExportDirective],
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
    ExcelExportDirective
  ],
  entryComponents: [
    DialogComponent
  ],
})
export class SharedModule { }
