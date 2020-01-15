import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderHomeComponent } from './order-home/order-home.component';
import { OrderImportComponent } from './order-import/order-import.component';
import { OrderCreatorComponent } from './order-creator/order-creator.component';
import { OrderEditorComponent } from './order-editor/order-editor.component';
import { OrderViewerComponent } from './order-viewer/order-viewer.component';


const routes: Routes = [
  {
    path: '',
    component: OrderHomeComponent,
    data: {
      title: 'Orders',
      headerDisplay: 'none'
    }
  },
  {
    path: 'import',
    component: OrderImportComponent,
    data: {
      title: 'Import Orders',
      breadcrumb: [
        {
          label: 'Orders',
          url: 'orders'
        },
        {
          label: 'Import Orders',
          url: ''
        }
      ],
      headerDisplay: 'none'
    }
  },
  {
    path: 'new',
    component: OrderCreatorComponent,
    data: {
      title: 'New Order',
      breadcrumb: [
        {
          label: 'Orders',
          url: 'orders'
        },
        {
          label: 'New Order',
          url: ''
        }
      ],
      headerDisplay: 'none'
    }
  },
  {
    path: 'edit/:name',
    component: OrderEditorComponent,
    data: {
      title: 'Edit Order',
      breadcrumb: [
        {
          label: 'Orders',
          url: 'orders'
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
    component: OrderViewerComponent,
    data: {
      title: 'View Order',
      breadcrumb: [
        {
          label: 'Orders',
          url: 'orders'
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
export class OrderRoutingModule { }
