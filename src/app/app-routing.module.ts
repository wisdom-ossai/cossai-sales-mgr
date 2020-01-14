import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    data: {
      breadcrumb: [
        {
          label: 'Dashboard',
          url: 'dashboard'
        }
      ],
    },
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
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
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
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
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
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
    loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
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
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
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
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
