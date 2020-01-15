import { NgModule } from '@angular/core';
import * as Material from '@angular/material';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
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
    Material.MatNativeDateModule,
    Material.MatProgressBarModule,
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
    Material.MatProgressBarModule
  ]
})
export class MaterialModule { }
