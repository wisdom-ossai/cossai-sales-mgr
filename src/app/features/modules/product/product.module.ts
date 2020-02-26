import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductHomeComponent } from './product-home/product-home.component';
import { SharedModule } from '@shared/shared.module';
import { ProductCreatorComponent } from './product-creator/product-creator.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { ProductImportComponent } from './product-import/product-import.component';
import { ProductViewerComponent } from './product-viewer/product-viewer.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './store/product.reducer';


@NgModule({
  declarations: [
    ProductHomeComponent,
    ProductCreatorComponent,
    ProductEditorComponent,
    ProductImportComponent,
    ProductViewerComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    StoreModule.forFeature('productState', productReducer)
  ],
})
export class ProductModule { }
