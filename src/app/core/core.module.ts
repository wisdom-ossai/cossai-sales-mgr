import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './guards/module-import-guard';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { appReducers } from './store/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppEffects } from './store/app.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(AppEffects),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    // ToastrModule.forRoot({
    //   timeOut: 500,
    //   positionClass: 'toast-top-right',
    //   preventDuplicates: false
    // })
  ],
  exports: [
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
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
