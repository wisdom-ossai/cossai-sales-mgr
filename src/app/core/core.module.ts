import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng7MatBreadcrumbModule } from 'ng7-mat-breadcrumb';
import { throwIfAlreadyLoaded } from './guards/module-import-guard';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers, metaReducers } from '../store/app-state';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Ng7MatBreadcrumbModule,
    SharedModule,
    StoreModule.forRoot(appReducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
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
