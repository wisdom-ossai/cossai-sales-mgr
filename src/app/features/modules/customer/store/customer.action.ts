import { Action } from '@ngrx/store';
import { ICustomer } from 'src/app/interfaces/customer.interface';

export enum CustomerActionTypes {
  LOADING_DATA = '[ CUSTOMER MODULE ] Loading Data Customer',
  NOT_LOADING_DATA = '[ CUSTOMER MODULE ] Not Loading Data Customer',

  PROCESSING = '[ CUSTOMER MODULE ] Processing Action on Customer',
  NOT_PROCESSING = '[ CUSTOMER MODULE ] Not Processing Action on Customer',

  LOAD_DATA = '[ CUSTOMER MODULE ] Load Customer Data',
  LOAD_DATA_SUCCESS = '[ CUSTOMER MODULE ] Load Customer Data Success',

}


export class LoadingDataCustomer implements Action {
  readonly type = CustomerActionTypes.LOADING_DATA;
}
export class NotLoadingDataCustomer implements Action {
  readonly type = CustomerActionTypes.NOT_LOADING_DATA;
}

export class ProcessingActionCustomer implements Action {
  readonly type = CustomerActionTypes.PROCESSING;
}
export class NotProcessingActionCustomer implements Action {
  readonly type = CustomerActionTypes.NOT_PROCESSING;
}

export class LoadDataCustomer implements Action {
  readonly type = CustomerActionTypes.LOAD_DATA;
}
export class LoadDataCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.LOAD_DATA_SUCCESS;
  constructor(public payload: ICustomer[]) {}
}


export type CustomerActions =
  | LoadingDataCustomer
  | NotLoadingDataCustomer
  | ProcessingActionCustomer
  | NotProcessingActionCustomer
  | LoadDataCustomer
  | LoadDataCustomerSuccess;
