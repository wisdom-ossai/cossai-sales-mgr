import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ApiService } from '@core/services/api.service';
import { Store, Action } from '@ngrx/store';
import { ICustomerState } from '../root';
import {
  LoadDataCustomer,
  HomeActionTypes,
  NotLoadingDataCustomer,
  LoadDataCustomerSuccess,
  LoadErrorMessage
} from './home.action';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { ICustomer } from 'src/app/interfaces';

@Injectable()
export class HomeEffect {
  constructor(private actions$: Actions, private store: Store<ICustomerState>, private apiService: ApiService) { }


  // @Effect()
  // loadData$: Observable<Action> = this.actions$
  //   .ofType<LoadDataCustomer>(CustomerActionTypes.LOAD_DATA)
  //     .pipe(
  //       switchMap(() => {
  //     return this.apiService
  //       .read('customer.json')
  //       .pipe(
  //         map((data: any) => {
  //           console.log(data);
  //           return new LoadDataCustomerSuccess((
  //             data
  //           ) as ICustomer[]);
  //           // if (data.Success && data.Results) {
  //           //   this.store.dispatch(new NotLoadingDataCustomer());
  //           //   return new LoadDataCustomerSuccess((
  //           //     data.Results
  //           //   ) as ICustomer[]);
  //           // } else {
  //           //   this.store.dispatch(new NotLoadingDataCustomer());
  //           //   return new LoadErrorMessage('Data Could not Be Loaded');
  //           // }
  //         }),
  //         catchError((error: any) =>
  //           of(
  //             new NotLoadingDataCustomer(),
  //             new LoadErrorMessage(`${error}`)
  //           )
  //         )
  //       );
  //   })
  //   );

  @Effect()
  loadLocation$ = this.actions$
    .pipe(
      ofType<LoadDataCustomer>(HomeActionTypes.LOAD_DATA),
      mergeMap((action) => this.apiService
        .read('customer.json')
        .pipe(
          map(data => {
            console.log(data);
            return (new LoadDataCustomerSuccess(data.customers));
          }),
          catchError((errorMessage) => of(
            new NotLoadingDataCustomer(),
            new LoadErrorMessage(`${errorMessage}`)
          ))
        ))
    );
}
