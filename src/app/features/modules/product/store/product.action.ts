import { Action } from '@ngrx/store';
import { IProduct } from 'src/app/interfaces';

export enum ProductActionTypes {
  LOADING_DATA = '[ PRODUCT MODULE ] Loading Data Product',
  NOT_LOADING_DATA = '[ PRODUCT MODULE ] Not Loading Data Product',

  PROCESSING = '[ PRODUCT MODULE ] Processing Action on Product',
  NOT_PROCESSING = '[ PRODUCT MODULE ] Not Processing Action on Product',

  LOAD_DATA = '[ PRODUCT MODULE ] Load Product Data',
  LOAD_DATA_SUCCESS = '[ PRODUCT MODULE ] Load Product Data Success',

  LOAD_PRODUCT_DATA_SINGLE = '[ PRODUCT MODULE ] Load Single Product Data',
  LOAD_PRODUCT_DATA_SINGLE_SUCCESS = '[ PRODUCT MODULE ] Load Single Product Data Success',

  CREATE = '[ PRODUCT MODULE ] Create Product Data',
  UPDATE = '[ PRODUCT MODULE ] Update Product Data',
  SAVE_SUCCESS = '[ PRODUCT MODULE ] Save Product Data Success',

}


export class LoadingDataProduct implements Action {
  readonly type = ProductActionTypes.LOADING_DATA;
}
export class NotLoadingDataProduct implements Action {
  readonly type = ProductActionTypes.NOT_LOADING_DATA;
}

export class ProcessingDataProduct implements Action {
  readonly type = ProductActionTypes.PROCESSING;
}
export class NotProcessingDataProduct implements Action {
  readonly type = ProductActionTypes.NOT_PROCESSING;
}

export class LoadDataProduct implements Action {
  readonly type = ProductActionTypes.LOAD_DATA;
}

export class LoadDataProductSuccess implements Action {
  readonly type = ProductActionTypes.LOAD_DATA_SUCCESS;
  constructor(public payload: IProduct[]) {}
}

export class LoadSingleProductData implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCT_DATA_SINGLE;
  constructor(public payload: {productID: string}) {}
}

export class LoadSingleProductDataSuccess implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCT_DATA_SINGLE_SUCCESS;
  constructor(public payload: IProduct) {}
}

export class CreateDataProduct implements Action {
  readonly type = ProductActionTypes.CREATE;
  constructor(public data: IProduct, public isEdit: boolean, public productID?: string) {}
}

export class UpdateDataProduct implements Action {
  readonly type = ProductActionTypes.UPDATE;
  constructor(public data: IProduct, public productID?: string) {}
}

export class SaveDataProductSuccess implements Action {
  readonly type = ProductActionTypes.SAVE_SUCCESS;
  constructor(public isSaved: boolean) {}
}


export type ProductActions =
  | LoadingDataProduct
  | NotLoadingDataProduct
  | ProcessingDataProduct
  | NotProcessingDataProduct
  | LoadDataProduct
  | LoadDataProductSuccess
  | LoadSingleProductData
  | LoadSingleProductDataSuccess
  | CreateDataProduct
  | UpdateDataProduct
  | SaveDataProductSuccess;
