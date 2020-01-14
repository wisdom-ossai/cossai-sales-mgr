import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng7MatBreadcrumbModule } from 'ng7-mat-breadcrumb';
import { LayoutModule } from './features/modules';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    Ng7MatBreadcrumbModule,
    BrowserAnimationsModule,
    CommonModule,
    CoreModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
