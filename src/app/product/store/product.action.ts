import { Action } from '@ngrx/store';
import { IProduct } from 'src/app/interfaces';

export enum ProductActionTypes {
  LOADING_DATA = '[ PRODUCT MODULE ] Loading Data Product',
  NOT_LOADING_DATA = '[ PRODUCT MODULE ] Not Loading Data Product',

  PROCESSING = '[ PRODUCT MODULE ] Processing Action on Product',
  NOT_PROCESSING = '[ PRODUCT MODULE ] Not Processing Action on Product',

  LOAD_DATA = '[ PRODUCT MODULE ] Load Product Data',
  LOAD_DATA_SUCCESS = '[ PRODUCT MODULE ] Load Product Data Success',

}


export class LoadingDataProduct implements Action {
  readonly type = ProductActionTypes.LOADING_DATA;
}
export class NotLoadingDataProduct implements Action {
  readonly type = ProductActionTypes.NOT_LOADING_DATA;
}

export class ProcessingActionProduct implements Action {
  readonly type = ProductActionTypes.PROCESSING;
}
export class NotProcessingActionProduct implements Action {
  readonly type = ProductActionTypes.NOT_PROCESSING;
}

export class LoadDataProduct implements Action {
  readonly type = ProductActionTypes.LOAD_DATA;
}
export class LoadDataProductSuccess implements Action {
  readonly type = ProductActionTypes.LOAD_DATA_SUCCESS;
  constructor(public payload: IProduct[]) {}
}


export type ProductActions =
  | LoadingDataProduct
  | NotLoadingDataProduct
  | ProcessingActionProduct
  | NotProcessingActionProduct
  | LoadDataProduct
  | LoadDataProductSuccess;
