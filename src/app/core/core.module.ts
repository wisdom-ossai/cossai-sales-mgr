import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng7MatBreadcrumbModule } from 'ng7-mat-breadcrumb';
import { throwIfAlreadyLoaded } from './guards/module-import-guard';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Ng7MatBreadcrumbModule,
    SharedModule
  ],
  exports: [
    Ng7MatBreadcrumbModule
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: CoreModule,
  //     providers: [
  //       AuthService,
  //       AuthenticatedGuard,
  //       AuthorizedGuard,
  //       AdminGuard,
  //       PermittedGuard
  //     ]
  //   };
  // }
}
