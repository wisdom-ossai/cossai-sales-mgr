import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import {
  LoadDataProduct,
  ProductActionTypes,
  LoadDataProductSuccess,
  NotLoadingDataProduct,
  SaveDataProduct,
  SaveDataProductSuccess
} from './product.action';
import { map, switchMap, catchError } from 'rxjs/operators';
import * as constants from '@shared/constants/api-url.constant';
import { IApiResult } from '@shared/interfaces/api-result.interface';
import { IAppState } from '@core/store/app.state';
import { ApiService } from '@core/services/api.service';
import { ToastrTypes } from '@core/enumerations/toastr-types';
// import { NotificationService } from '@core/services/notification.service';

@Injectable()
export class ProductEffect {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private store: Store<IAppState>,
    // private toast: NotificationService
  ) { }


  @Effect()
  loadProductData$: Observable<Action> = this.actions$
      .pipe(
      ofType<LoadDataProduct>(ProductActionTypes.LOAD_DATA),
      map(action => action),
      switchMap(payload => {
        return this.apiService
          .read(constants.PRODUCT_URLS.getAll)
          .pipe(
            map((data: IApiResult) => {
              if (data.Success && data.Results) {
                this.store.dispatch(new NotLoadingDataProduct());
                // this.toast.show(
                //   {
                //     title: 'Data Could Not Be Loaded',
                //     message: 'Something went wrong. Form data could not be loaded.',
                //     toastType: ToastrTypes.SUCCESS
                //   });
                return new LoadDataProductSuccess(data.Results);
              } else {
                this.store.dispatch(new NotLoadingDataProduct());
              }
            }),
            catchError((error: any) =>
              of(
                new NotLoadingDataProduct(),
                // new this.toast.show(
                //   {
                //     title: 'Data Could Not Be Loaded',
                //     message: 'Something went wrong. Form data could not be loaded.',
                //     toastType: ToastrTypes.ERROR
                //   })
              )
            )
          );
      })
    );

  @Effect()
  createProduct$: Observable<Action> = this.actions$
      .pipe(
      ofType<SaveDataProduct>(ProductActionTypes.SAVE),
      map(action => action),
        switchMap(payload => {
          let url;
          payload.isEdit ? url = `constants.PRODUCT_URLS.edit/${payload.productID}` : url = constants.PRODUCT_URLS.create;
          return this.apiService
          .create(url, payload.data)
          .pipe(
            map((data: IApiResult) => {
              if (data.Success) {
                this.store.dispatch(new NotLoadingDataProduct());
                this.store.dispatch(new SaveDataProductSuccess(true));
                this.store.dispatch(new LoadDataProduct());
                return new LoadDataProductSuccess(data.Results);
              } else {
                this.store.dispatch(new NotLoadingDataProduct());
                this.store.dispatch(new SaveDataProductSuccess(false));
              }
            }),
            catchError((error: any) =>
              of(
                new NotLoadingDataProduct(),
                new SaveDataProductSuccess(false)
                // new this.toast.show(
                //   {
                //     title: 'Data Could Not Be Loaded',
                //     message: 'Something went wrong. Form data could not be loaded.',
                //     toastType: ToastrTypes.ERROR
                //   })
              )
            )
          );
      })
    );

}
