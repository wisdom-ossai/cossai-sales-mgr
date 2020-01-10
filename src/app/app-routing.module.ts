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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
