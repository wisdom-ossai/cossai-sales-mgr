import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import {
  LoadDataProduct,
  ProductActionTypes,
  LoadDataProductSuccess,
  NotLoadingDataProduct,
  SaveDataProductSuccess,
  NotProcessingDataProduct,
  UpdateDataProduct,
  CreateDataProduct,
  LoadSingleProductData,
  LoadSingleProductDataSuccess
} from './product.action';
import { map, switchMap, catchError } from 'rxjs/operators';
import * as constants from '@shared/constants/api-url.constant';
import { IApiResult } from '@shared/interfaces/api-result.interface';
import { IAppState } from '@core/store/app.state';
import { ApiService } from '@core/services/api.service';

@Injectable()
export class ProductEffect {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private store: Store<IAppState>,
  ) { }


  @Effect()
  loadProductData$: Observable<Action> = this.actions$
      .pipe(
      ofType<LoadDataProduct>(ProductActionTypes.LOAD_DATA),
      map(action => action),
      switchMap(() => {
        return this.apiService
          .read(constants.PRODUCT_URLS.getAll)
          .pipe(
            map((data: IApiResult) => {
              if (data.Success && data.Results) {
                console.log(data.Results);
                this.store.dispatch(new NotLoadingDataProduct());
                return new LoadDataProductSuccess(data.Results);
              } else {
                this.store.dispatch(new NotLoadingDataProduct());
              }
            }),
            catchError((error: any) =>
              of(
                new NotLoadingDataProduct(),
              )
            )
          );
      })
    );

  @Effect()
  loadSingleProduct$: Observable<Action> = this.actions$
    .pipe(
      ofType<LoadSingleProductData>(ProductActionTypes.LOAD_PRODUCT_DATA_SINGLE),
      map(action => action.payload),
      switchMap(payload => {
        return this.apiService
          .read(`${constants.PRODUCT_URLS.getOne}/${payload.productID}`)
          .pipe(
            map((data: IApiResult) => {
              if (data.Success && data.Results) {
                this.store.dispatch(new NotProcessingDataProduct());
                return new LoadSingleProductDataSuccess(data.Results[0]);
              } else {
                this.store.dispatch(new NotProcessingDataProduct());
                return new LoadSingleProductDataSuccess(null);
              }
            }),
            catchError((error: any) =>
              of(
                new NotProcessingDataProduct(),
                new SaveDataProductSuccess(false)
              )
            )
          );
      })
    );

  @Effect()
  createProduct$: Observable<Action> = this.actions$
      .pipe(
      ofType<CreateDataProduct>(ProductActionTypes.CREATE),
      map(action => action),
        switchMap(payload => {
          return this.apiService
            .create(constants.PRODUCT_URLS.create, payload.data)
            .pipe(
              map((data: IApiResult) => {
                if (data.Success) {
                  this.store.dispatch(new NotProcessingDataProduct());
                  this.store.dispatch(new LoadDataProduct());
                  return new SaveDataProductSuccess(true);
                } else {
                  this.store.dispatch(new NotProcessingDataProduct());
                  return new SaveDataProductSuccess(false);
                }
              }),
              catchError((error: any) =>
                of(
                  new NotProcessingDataProduct(),
                  new SaveDataProductSuccess(false)
                )
              )
            );
        })
      );

  @Effect()
  updateProduct$: Observable<Action> = this.actions$
      .pipe(
      ofType<UpdateDataProduct>(ProductActionTypes.UPDATE),
      map(action => action),
        switchMap(payload => {
          const url = `${constants.PRODUCT_URLS.edit}/${payload.productID}`;
          return this.apiService
          .update(url, payload.data)
          .pipe(
            map((data: IApiResult) => {
              if (data.Success) {
                this.store.dispatch(new NotProcessingDataProduct());
                this.store.dispatch(new LoadDataProduct());
                return new SaveDataProductSuccess(true);
              } else {
                this.store.dispatch(new NotProcessingDataProduct());
                return new SaveDataProductSuccess(false);
              }
            }),
            catchError((error: any) =>
              of(
                new NotProcessingDataProduct(),
                new SaveDataProductSuccess(false)
              )
            )
          );
      })
    );

}
