import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { UserCreatorComponent } from './user-creator/user-creator.component';
import { UserViewerComponent } from './user-viewer/user-viewer.component';
import { UserImportComponent } from './user-import/user-import.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserActivityComponent } from './user-activity/user-activity.component';


@NgModule({
  declarations: [
    UserHomeComponent,
    UserEditorComponent,
    UserCreatorComponent,
    UserViewerComponent,
    UserImportComponent,
    UserActivityComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
