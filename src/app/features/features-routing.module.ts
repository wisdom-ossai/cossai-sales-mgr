import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'dashboard',
    data: {
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
      breadcrumb: [
        {
          label: 'Users',
          url: 'users'
        }
      ],
    },
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'customers',
    data: {
      breadcrumb: [
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
      breadcrumb: [
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
      breadcrumb: [
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
      breadcrumb: [
        {
          label: 'Orders',
          url: 'orders'
        }
      ],
    },
    loadChildren: () => import('./modules/order/order.module').then(m => m.OrderModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
