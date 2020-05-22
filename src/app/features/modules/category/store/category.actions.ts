import { Action } from '@ngrx/store';
import { ICategory } from 'src/app/interfaces/category.interface';

export enum CategoryActionTypes {
  LOADING_DATA = '[ CATEGORY MODULE ] Loading Data Category',
  NOT_LOADING_DATA = '[ CATEGORY MODULE ] Not Loading Data Category',

  PROCESSING = '[ CATEGORY MODULE ] Processing Action on Category',
  NOT_PROCESSING = '[ CATEGORY MODULE ] Not Processing Action on Category',

  LOAD_DATA = '[ CATEGORY MODULE ] Load Category Data',
  LOAD_DATA_SUCCESS = '[ CATEGORY MODULE ] Load Category Data Success',

}


export class LoadingDataCategory implements Action {
  readonly type = CategoryActionTypes.LOADING_DATA;
}
export class NotLoadingDataCategory implements Action {
  readonly type = CategoryActionTypes.NOT_LOADING_DATA;
}

export class ProcessingActionCategory implements Action {
  readonly type = CategoryActionTypes.PROCESSING;
}
export class NotProcessingActionCategory implements Action {
  readonly type = CategoryActionTypes.NOT_PROCESSING;
}

export class LoadDataCategory implements Action {
  readonly type = CategoryActionTypes.LOAD_DATA;
}
export class LoadDataCategorySuccess implements Action {
  readonly type = CategoryActionTypes.LOAD_DATA_SUCCESS;
  constructor(public payload: ICategory[]) {}
}


export type CategoryActions =
  | LoadingDataCategory
  | NotLoadingDataCategory
  | ProcessingActionCategory
  | NotProcessingActionCategory
  | LoadDataCategory
  | LoadDataCategorySuccess;
