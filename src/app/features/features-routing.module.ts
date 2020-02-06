import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';


const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        data: {
          animation: 'isRight',
          breadcrumb: [
            {
              label: 'Dashboard',
              url: ''
            }
          ],
        },
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'users',
        data: {
          animation: 'isLeft',
          breadcrumb: [
            {
              label: 'Dashboard',
              url: 'dashboard'
            },
            {
              label: 'Users',
              url: 'users'
            },
          ],
        },
        loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'customers',
        data: {
          animation: 'isRight',
          breadcrumb: [
            {
              label: 'Dashboard',
              url: 'dashboard'
            },
            {
              label: 'Customers',
              url: 'customers'
            }
          ],
        },
        loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule)
      },
      {
        path: 'categories',
        data: {
          animation: 'isLeft',
          breadcrumb: [
            {
              label: 'Dashboard',
              url: 'dashboard'
            },
            {
              label: 'Categories',
              url: 'categories'
            }
          ],
        },
        loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule)
      },
      {
        path: 'products',
        data: {
          animation: 'isRight',
          breadcrumb: [
            {
              label: 'Dashboard',
              url: 'dashboard'
            },
            {
              label: 'Products',
              url: 'products'
            }
          ],
        },
        loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'orders',
        data: {
          animation: 'isLeft',
          breadcrumb: [
            {
              label: 'Dashboard',
              url: 'dashboard'
            },
            {
              label: 'Orders',
              url: 'orders'
            }
          ],
        },
        loadChildren: () => import('./modules/order/order.module').then(m => m.OrderModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
