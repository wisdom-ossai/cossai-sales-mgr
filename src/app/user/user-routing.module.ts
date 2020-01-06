import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { UserCreatorComponent } from './user-creator/user-creator.component';
import { UserViewerComponent } from './user-viewer/user-viewer.component';
import { UserImportComponent } from './user-import/user-import.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'User ',
      headerDisplay: 'none'
    }
  },
  {
    path: 'import',
    component: UserImportComponent,
    data: {
      title: 'Import Users',
      headerDisplay: 'none'
    }
  },
  {
    path: 'new',
    component: UserCreatorComponent,
    data: {
      title: 'Create User',
      headerDisplay: 'none'
    }
  },
  {
    path: 'edit/:name',
    component: UserEditorComponent,
    data: {
      title: 'Edit User',
      headerDisplay: 'none'
    }
  },
  {
    path: 'detail/:name',
    component: UserViewerComponent,
    data: {
      title: 'View User',
      headerDisplay: 'none'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
