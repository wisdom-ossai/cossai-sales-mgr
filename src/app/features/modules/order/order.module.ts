import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderHomeComponent } from './order-home/order-home.component';
import { SharedModule } from '@shared/shared.module';
import { OrderCreatorComponent } from './order-creator/order-creator.component';
import { OrderEditorComponent } from './order-editor/order-editor.component';
import { OrderImportComponent } from './order-import/order-import.component';
import { OrderViewerComponent } from './order-viewer/order-viewer.component';
import { StoreModule } from '@ngrx/store';
import { orderReducer, metaReducers } from './store/order.reducer';


@NgModule({
  declarations: [
    OrderHomeComponent,
    OrderCreatorComponent,
    OrderEditorComponent,
    OrderImportComponent,
    OrderViewerComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    StoreModule.forFeature(
      'OrderState',
      orderReducer,
      { metaReducers })
  ],
})
export class OrderModule { }
