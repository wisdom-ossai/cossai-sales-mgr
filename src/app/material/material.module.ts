import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';



@NgModule({
  declarations: [],
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
  ]
})
export class MaterialModule { }
