import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductImportComponent } from './product-import/product-import.component';
import { ProductCreatorComponent } from './product-creator/product-creator.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { ProductViewerComponent } from './product-viewer/product-viewer.component';


const routes: Routes = [
  {
    path: '',
    component: ProductHomeComponent,
    data: {
      title: 'Products',
      headerDisplay: 'none'
    }
  },
  {
    path: 'import',
    component: ProductImportComponent,
    data: {
      title: 'Import Products',
      breadcrumb: [
        {
          label: 'Dashboard',
          url: 'dashboard'
        },
        {
          label: 'Products',
          url: 'products'
        },
        {
          label: 'Import Products',
          url: ''
        }
      ],
      headerDisplay: 'none'
    }
  },
  {
    path: 'new',
    component: ProductCreatorComponent,
    data: {
      title: 'New Product',
      breadcrumb: [
        {
          label: 'Dashboard',
          url: 'dashboard'
        },
        {
          label: 'Products',
          url: 'products'
        },
        {
          label: 'New Product',
          url: ''
        }
      ],
      headerDisplay: 'none'
    }
  },
  {
    path: 'edit/:name',
    component: ProductEditorComponent,
    data: {
      title: 'Edit Product',
      breadcrumb: [
        {
          label: 'Dashboard',
          url: 'dashboard'
        },
        {
          label: 'Products',
          url: 'products'
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
    component: ProductViewerComponent,
    data: {
      title: 'View Product',
      breadcrumb: [
        {
          label: 'Dashboard',
          url: 'dashboard'
        },
        {
          label: 'Products',
          url: 'products'
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
export class ProductRoutingModule { }
