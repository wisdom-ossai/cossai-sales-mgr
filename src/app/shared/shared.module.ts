import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonRowComponent, DialogComponent } from './components';
import { ExcelExportDirective } from './directives/excel-export.directive';
import { FooterComponent } from './components/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SnackbarDirective } from './directives/snackbar.directive';
import { HttpClientModule } from '@angular/common/http';
import { DataTableComponent } from './components/data-table/data-table.component';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { FileUploadComponent } from './components/file-upload/file-upload.component';


@NgModule({
  declarations: [
    ButtonRowComponent,
    DataTableComponent,
    DialogComponent,
    FooterComponent,

    ExcelExportDirective,
    SnackbarDirective,
    LoadingComponent,
    DateFormatPipe,
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,

    ButtonRowComponent,
    DataTableComponent,
    DialogComponent,
    FooterComponent,
    LoadingComponent,
    FileUploadComponent,

    ExcelExportDirective,

    DateFormatPipe
  ],
  entryComponents: [
    DialogComponent
  ],
})
export class SharedModule { }
