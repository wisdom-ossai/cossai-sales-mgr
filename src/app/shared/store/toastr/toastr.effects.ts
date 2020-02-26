import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ShowToastr, ToastrActionTypes } from './toastr.actions';
// import { NotificationService } from '@core/services/notification.service';

@Injectable()
export class ToastEffects {
  constructor(private actions$: Actions) { }

  // @Effect({ dispatch: false })
  // showToast$: Observable<any> = this.actions$
  //   .pipe(
  //     ofType<ShowToastr>(ToastrActionTypes.SHOW),
  //     map((action => action.payload),
  //       tap( payload => {
  //         this.toast.show(payload.message, payload.title, payload.type)
  //       }, e => {
  //           console.log(e);
  //       })
  //     )
  // );
}
