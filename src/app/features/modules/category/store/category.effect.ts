import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ApiService } from '@core/services/api.service';
import { Store, Action } from '@ngrx/store';
import { IAppState } from '@core/store/app.state';
import { Observable, of } from 'rxjs';
import {
  CategoryActionTypes,
  LoadDataCategory,
  NotLoadingDataCategory,
  LoadDataCategorySuccess,
  LoadSingleDataCategory,
  LoadSingleDataCategorySuccess,
  NotProcessingActionCategory,
  SaveDataCategorySuccess,
  CreateDataCategory,
  UpdateDataCategory,
  DeleteCategoryData
} from './category.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { IApiResult } from '@shared/interfaces/api-result.interface';
import * as constants from '@shared/constants/api-url.constant';

@Injectable()
export class CategoryEffect {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private store: Store<IAppState>) { }


  @Effect()
  loadCategoryData$: Observable<Action> = this.actions$
    .pipe(
      ofType<LoadDataCategory>(CategoryActionTypes.LOAD_DATA),
      map(action => action),
      switchMap(() => {
        return this.apiService
          .read(constants.CATEGORY_URLS.getAll)
          .pipe(
            map((data: IApiResult) => {
              if (data.Success && data.Results) {
                this.store.dispatch(new NotLoadingDataCategory());
                return new LoadDataCategorySuccess(data.Results);
              } else {
                this.store.dispatch(new NotLoadingDataCategory());
              }
            }),
            catchError((error: any) =>
              of(
                new NotLoadingDataCategory(),
              )
            )
          );
      })
    );

  @Effect()
  loadSingleCategory$: Observable<Action> = this.actions$
    .pipe(
      ofType<LoadSingleDataCategory>(CategoryActionTypes.LOAD_SINGLE_DATA),
      map(action => action.payload),
      switchMap(payload => {
        return this.apiService
          .read(`${constants.CATEGORY_URLS.getOne}/${payload.categoryId}`)
          .pipe(
            map((data: IApiResult) => {
              if (data.Success && data.Results) {
                this.store.dispatch(new NotProcessingActionCategory());
                return new LoadSingleDataCategorySuccess(data.Results[0]);
              } else {
                this.store.dispatch(new NotProcessingActionCategory());
                return new LoadSingleDataCategorySuccess(null);
              }
            }),
            catchError((error: any) =>
              of(
                new NotProcessingActionCategory(),
                new SaveDataCategorySuccess(false)
              )
            )
          );
      })
    );

  @Effect()
  createCategory$: Observable<Action> = this.actions$
    .pipe(
      ofType<CreateDataCategory>(CategoryActionTypes.CREATE),
      map(action => action),
      switchMap(payload => {
        return this.apiService
          .create(constants.CATEGORY_URLS.create, payload.data)
          .pipe(
            map((data: IApiResult) => {
              if (data.Success) {
                this.store.dispatch(new NotProcessingActionCategory());
                this.store.dispatch(new LoadDataCategory());
                return new SaveDataCategorySuccess(true);
              } else {
                this.store.dispatch(new NotProcessingActionCategory());
                return new SaveDataCategorySuccess(false);
              }
            }),
            catchError((error: any) =>
              of(
                new NotProcessingActionCategory(),
                new SaveDataCategorySuccess(false)
              )
            )
          );
      })
    );

  @Effect()
  updateCategory$: Observable<Action> = this.actions$
    .pipe(
      ofType<UpdateDataCategory>(CategoryActionTypes.UPDATE),
      map(action => action),
      switchMap(payload => {
        const url = `${constants.CATEGORY_URLS.edit}/${payload.categoryId}`;
        return this.apiService
          .update(url, payload.data)
          .pipe(
            map((data: IApiResult) => {
              if (data.Success) {
                this.store.dispatch(new NotProcessingActionCategory());
                this.store.dispatch(new LoadDataCategory());
                return new SaveDataCategorySuccess(true);
              } else {
                this.store.dispatch(new NotProcessingActionCategory());
                return new SaveDataCategorySuccess(false);
              }
            }),
            catchError((error: any) =>
              of(
                new NotProcessingActionCategory(),
                new SaveDataCategorySuccess(false)
              )
            )
          );
      })
    );

  @Effect()
  deleteOneCategory$: Observable<Action> = this.actions$
    .pipe(
      ofType<DeleteCategoryData>(CategoryActionTypes.DELETE),
      map(action => action.payload),
      switchMap(payload => {
        const url = `${constants.CATEGORY_URLS.delete}/${payload.categoryId}`;
        return this.apiService
          .delete(url)
          .pipe(
            map((data: IApiResult) => {
              if (data.Success) {
                this.store.dispatch(new NotProcessingActionCategory());
                this.store.dispatch(new LoadDataCategory());
                return new SaveDataCategorySuccess(true);
              } else {
                this.store.dispatch(new NotProcessingActionCategory());
                return new SaveDataCategorySuccess(false);
              }
            }),
            catchError((error: any) =>
              of(
                new NotProcessingActionCategory(),
                new SaveDataCategorySuccess(false)
              )
            )
          );
      })
    );
}
