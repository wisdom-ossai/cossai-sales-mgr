import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { UserCreatorComponent } from './user-creator/user-creator.component';
import { UserViewerComponent } from './user-viewer/user-viewer.component';
import { UserImportComponent } from './user-import/user-import.component';
import { UserActivityComponent } from './user-activity/user-activity.component';


const routes: Routes = [
  {
    path: '',
    component: UserHomeComponent,
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
      breadcrumb: [
        {
          label: 'User',
          url: 'users'
        },
        {
          label: 'Import Users',
          url: ''
        },
      ],
      headerDisplay: 'none'
    }
  },
  {
    path: 'new',
    component: UserCreatorComponent,
    data: {
      title: 'Create User',
      breadcrumb: [
        {
          label: 'User',
          url: 'users'
        },
        {
          label: 'Create User',
          url: ''
        }
      ],
      headerDisplay: 'none'
    }
  },
  {
    path: 'edit/:name',
    component: UserEditorComponent,
    data: {
      title: 'Edit User',
      breadcrumb: [
        {
          label: 'User',
          url: 'users'
        },
        {
          label: 'Edit {{name}}',
          url: ''
        },
      ],
      headerDisplay: 'none'
    }
  },
  {
    path: 'detail/:name',
    component: UserViewerComponent,
    data: {
      title: 'View User',
      breadcrumb: [
        {
          label: 'User',
          url: 'users'
        },
        {
          label: 'User Detail for {{name}}',
          url: ''
        },
        // {
        //   label: 'Activities',
        //   url: 'user/activities'
        // }
      ],
      headerDisplay: 'none'
    }
  },
  {
    path: 'activities',
    component: UserActivityComponent,
    data: {
      title: 'User Activities',
      breadcrumb: [
        {
          label: 'User',
          url: 'users'
        },
        {
          label: 'User Detail for {{name}}',
          url: 'users/detail/:name'
        },
        {
          label: 'View Activities',
          url: ''
        }
      ],
      headerDisplay: 'none'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
