import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { LayoutModule } from './modules/layout/layout.module';
import { FeaturesComponent } from './features.component';
import { SharedModule } from '@shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptorService } from '@core/services/loading-interceptor.service';
import { Ng7DynamicBreadcrumbModule } from 'ng7-dynamic-breadcrumb';


@NgModule({
  declarations: [FeaturesComponent],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    FeaturesRoutingModule,
    Ng7DynamicBreadcrumbModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorService,
      multi: true
    }
  ]
})
export class FeaturesModule { }
