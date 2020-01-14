import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { LayoutModule } from './modules/layout/layout.module';
import { FeaturesComponent } from './features.component';
import { SharedModule } from '@shared/shared.module';
import { Ng7MatBreadcrumbModule } from 'ng7-mat-breadcrumb';


@NgModule({
  declarations: [FeaturesComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    LayoutModule,
    SharedModule,
    // Ng7MatBreadcrumbModule
  ]
})
export class FeaturesModule { }
