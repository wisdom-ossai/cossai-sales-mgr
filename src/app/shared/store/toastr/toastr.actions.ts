import { Action } from '@ngrx/store';
import { ToastrTypes } from '@core/enumerations/toastr-types';

export enum ToastrActionTypes {
  SHOW = '[TOASTR] Show',
}

export class ShowToastr implements Action {
  readonly type = ToastrActionTypes.SHOW;

  constructor(public payload: {
    title: string,
    message: string,
    type?: ToastrTypes
  }) { }
}

export type ToastrActions = ShowToastr;
