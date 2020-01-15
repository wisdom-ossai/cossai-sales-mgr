import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerImportComponent } from './customer-import/customer-import.component';
import { CustomerCreatorComponent } from './customer-creator/customer-creator.component';
import { CustomerEditorComponent } from './customer-editor/customer-editor.component';
import { CustomerViewerComponent } from './customer-viewer/customer-viewer.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerHomeComponent,
    data: {
      title: 'Customers',
      headerDisplay: 'none'
    }
  },
  {
    path: 'import',
    component: CustomerImportComponent,
    data: {
      title: 'Import Customers',
      breadcrumb: [
        {
          label: 'Customers',
          url: 'customers'
        },
        {
          label: 'Import Customers',
          url: ''
        }
      ],
      headerDisplay: 'none'
    }
  },
  {
    path: 'new',
    component: CustomerCreatorComponent,
    data: {
      title: 'New Customer',
      breadcrumb: [
        {
          label: 'Customers',
          url: 'customers'
        },
        {
          label: 'New Customer',
          url: ''
        }
      ],
      headerDisplay: 'none'
    }
  },
  {
    path: 'edit/:name',
    component: CustomerEditorComponent,
    data: {
      title: 'Edit Customer',
      breadcrumb: [
        {
          label: 'Customers',
          url: 'customers'
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
    component: CustomerViewerComponent,
    data: {
      title: 'View Customer',
      breadcrumb: [
        {
          label: 'Customers',
          url: 'customers'
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
export class CustomerRoutingModule { }
