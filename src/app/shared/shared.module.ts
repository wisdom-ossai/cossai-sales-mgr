import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonRowComponent, DialogComponent } from './components';
import { ExcelExportDirective } from './directives/excel-export.directive';
import { FooterComponent } from './components/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SnackbarDirective } from './directives/snackbar.directive';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ButtonRowComponent,
    DialogComponent,
    ExcelExportDirective,
    FooterComponent,
    SnackbarDirective],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,

    ButtonRowComponent,
    DialogComponent,
    ExcelExportDirective,
    FooterComponent
  ],
  entryComponents: [
    DialogComponent
  ],
})
export class SharedModule { }
