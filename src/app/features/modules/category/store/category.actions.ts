import { Action } from '@ngrx/store';
import { ICategory } from 'src/app/interfaces/category.interface';

export enum CategoryActionTypes {
  LOADING_DATA = '[ CATEGORY MODULE ] Loading Data Category',
  NOT_LOADING_DATA = '[ CATEGORY MODULE ] Not Loading Data Category',

  PROCESSING = '[ CATEGORY MODULE ] Processing Action on Category',
  NOT_PROCESSING = '[ CATEGORY MODULE ] Not Processing Action on Category',

  LOAD_DATA = '[ CATEGORY MODULE ] Load Category Data',
  LOAD_DATA_SUCCESS = '[ CATEGORY MODULE ] Load Category Data Success',

  LOAD_SINGLE_DATA = '[ CATEGORY MODULE ] Load Single Category Data',
  LOAD_SINGLE_DATA_SUCCESS = '[ CATEGORY MODULE ] Load Single Category Data Success',

  CREATE = '[ CATEGORY MODULE ] Create Category Data',
  UPDATE = '[ CATEGORY MODULE ] Update Category Data',
  DELETE = '[ CATEGORY MODULE ] Delete Category Data',
  SAVE_SUCCESS = '[ CATEGORY MODULE ] Save Category Data Success',

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

export class LoadSingleDataCategory implements Action {
  readonly type = CategoryActionTypes.LOAD_SINGLE_DATA;
  constructor(public payload: {categoryId: string}) { }
}
export class LoadSingleDataCategorySuccess implements Action {
  readonly type = CategoryActionTypes.LOAD_SINGLE_DATA_SUCCESS;
  constructor(public payload: ICategory) {}
}


export class CreateDataCategory implements Action {
  readonly type = CategoryActionTypes.CREATE;
  constructor(public data: ICategory, public isEdit: boolean, public categoryId?: string) { }
}

export class UpdateDataCategory implements Action {
  readonly type = CategoryActionTypes.UPDATE;
  constructor(public data: ICategory, public categoryId?: string) { }
}

export class SaveDataCategorySuccess implements Action {
  readonly type = CategoryActionTypes.SAVE_SUCCESS;
  constructor(public isSaved: boolean) { }
}

export class DeleteCategoryData implements Action {
  readonly type = CategoryActionTypes.DELETE;
  constructor(public payload: { categoryId: string }) { }
}



export type CategoryActions =
  | LoadingDataCategory
  | NotLoadingDataCategory
  | ProcessingActionCategory
  | NotProcessingActionCategory
  | LoadDataCategory
  | LoadDataCategorySuccess
  | LoadSingleDataCategory
  | CreateDataCategory
  | UpdateDataCategory
  | SaveDataCategorySuccess
  | DeleteCategoryData
  | LoadSingleDataCategorySuccess;
