import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MainComponent
  ]
})
export class LayoutModule { }
