import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryHomeComponent } from './category-home/category-home.component';
import { CategoryImportComponent } from './category-import/category-import.component';
import { CategoryCreatorComponent } from './category-creator/category-creator.component';
import { CategoryEditorComponent } from './category-editor/category-editor.component';
import { CategoryViewerComponent } from './category-viewer/category-viewer.component';


const routes: Routes = [
  {
    path: '',
    component: CategoryHomeComponent,
    data: {
      title: 'Categories',
      headerDisplay: 'none'
    }
  },
  {
    path: 'import',
    component: CategoryImportComponent,
    data: {
      title: 'Import Categories',
      breadcrumb: [
        {
          label: 'Dashboard',
          url: 'dashboard'
        },
        {
          label: 'Categories',
          url: 'categories'
        },
        {
          label: 'Import Categories',
          url: ''
        }
      ],
      headerDisplay: 'none'
    }
  },
  {
    path: 'new',
    component: CategoryCreatorComponent,
    data: {
      title: 'New Category',
      breadcrumb: [
        {
          label: 'Dashboard',
          url: 'dashboard'
        },
        {
          label: 'Categories',
          url: 'categories'
        },
        {
          label: 'New Category',
          url: ''
        }
      ],
      headerDisplay: 'none'
    }
  },
  {
    path: 'edit/:name',
    component: CategoryEditorComponent,
    data: {
      title: 'Edit Category',
      breadcrumb: [
        {
          label: 'Dashboard',
          url: 'dashboard'
        },
        {
          label: 'Categories',
          url: 'categories'
        },
        {
          label: 'Edit {{name}}',
          url: ''
        }
      ],
      headerDisplay: 'none'
    }
  },
  {
    path: 'details/:name',
    component: CategoryViewerComponent,
    data: {
      title: 'View Category',
      breadcrumb: [
        {
          label: 'Dashboard',
          url: 'dashboard'
        },
        {
          label: 'Categories',
          url: 'categories'
        },
        {
          label: 'Details of {{name}}',
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
export class CategoryRoutingModule { }
