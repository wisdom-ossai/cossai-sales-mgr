import { Action } from '@ngrx/store';
import { IOrder } from 'src/app/interfaces';

export enum OrderActionTypes {
  LOADING_DATA = '[ ORDER MODULE ] Loading Data Order',
  NOT_LOADING_DATA = '[ ORDER MODULE ] Not Loading Data Order',

  PROCESSING = '[ ORDER MODULE ] Processing Action on Order',
  NOT_PROCESSING = '[ ORDER MODULE ] Not Processing Action on Order',

  LOAD_DATA = '[ ORDER MODULE ] Load Order Data',
  LOAD_DATA_SUCCESS = '[ ORDER MODULE ] Load Order Data Success',

}


export class LoadingDataOrder implements Action {
  readonly type = OrderActionTypes.LOADING_DATA;
}
export class NotLoadingDataOrder implements Action {
  readonly type = OrderActionTypes.NOT_LOADING_DATA;
}

export class ProcessingActionOrder implements Action {
  readonly type = OrderActionTypes.PROCESSING;
}
export class NotProcessingActionOrder implements Action {
  readonly type = OrderActionTypes.NOT_PROCESSING;
}

export class LoadDataOrder implements Action {
  readonly type = OrderActionTypes.LOAD_DATA;
}
export class LoadDataOrderSuccess implements Action {
  readonly type = OrderActionTypes.LOAD_DATA_SUCCESS;
  constructor(public payload: IOrder[]) {}
}


export type OrderActions =
  | LoadingDataOrder
  | NotLoadingDataOrder
  | ProcessingActionOrder
  | NotProcessingActionOrder
  | LoadDataOrder
  | LoadDataOrderSuccess;
