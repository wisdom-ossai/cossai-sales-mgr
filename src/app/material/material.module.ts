import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';
import { DataTableComponent } from './data-table/data-table.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    Material.MatToolbarModule,
    Material.MatIconModule,
    Material.MatButtonModule,
    Material.MatSidenavModule,
    Material.MatListModule,
    Material.MatCardModule,
    Material.MatBadgeModule,
    Material.MatMenuModule,
    Material.MatInputModule,
    Material.MatSelectModule,
    Material.MatTableModule,
    Material.MatCheckboxModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatGridListModule,
    Material.MatTooltipModule,
    Material.MatDialogModule,
    Material.MatSnackBarModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatIconModule,
    Material.MatButtonModule,
    Material.MatSidenavModule,
    Material.MatListModule,
    Material.MatCardModule,
    Material.MatBadgeModule,
    Material.MatMenuModule,
    Material.MatInputModule,
    Material.MatSelectModule,
    Material.MatTableModule,
    Material.MatCheckboxModule,
    Material.MatPaginatorModule,
    Material.MatGridListModule,
    Material.MatTooltipModule,
    Material.MatDialogModule,
    Material.MatSnackBarModule,
    Material.MatDatepickerModule,

    DataTableComponent
  ]
})
export class MaterialModule { }
