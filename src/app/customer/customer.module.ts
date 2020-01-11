import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { SharedModule } from '@shared/shared.module';
import { CustomerCreatorComponent } from './customer-creator/customer-creator.component';
import { CustomerEditorComponent } from './customer-editor/customer-editor.component';
import { CustomerImportComponent } from './customer-import/customer-import.component';
import { CustomerViewerComponent } from './customer-viewer/customer-viewer.component';
import { StoreModule } from '@ngrx/store';
import * as fromCustomerState from './store';
import { customerReducer, metaReducers } from './store/customer.reducer';


@NgModule({
  declarations: [
    CustomerHomeComponent,
    CustomerCreatorComponent,
    CustomerEditorComponent,
    CustomerImportComponent,
    CustomerViewerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    StoreModule.forFeature(
      'customerState',
      customerReducer,
      { metaReducers })
  ],
})
export class CustomerModule { }
