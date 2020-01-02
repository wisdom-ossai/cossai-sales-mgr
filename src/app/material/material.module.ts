import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [DataTableComponent],
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

    DataTableComponent
  ]
})
export class MaterialModule { }
