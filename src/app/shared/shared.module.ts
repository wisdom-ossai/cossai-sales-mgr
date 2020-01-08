import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonRowComponent, DialogComponent } from './components';
import { ExcelExportDirective } from './dirctives/excel-export.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [ButtonRowComponent, DialogComponent, ExcelExportDirective, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,

    ButtonRowComponent,
    DialogComponent,
    ExcelExportDirective,
    HeaderComponent,
    FooterComponent
  ],
  entryComponents: [
    DialogComponent
  ],
})
export class SharedModule { }
