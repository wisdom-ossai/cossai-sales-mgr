import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { UserCreatorComponent } from './user-creator/user-creator.component';


@NgModule({
  declarations: [HomeComponent, UserEditorComponent, UserCreatorComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class UserModule { }
