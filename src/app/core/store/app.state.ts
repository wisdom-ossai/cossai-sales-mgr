import { IProductState } from '../../features/modules/product/store/product.state';
import { RouterReducerState } from '@ngrx/router-store';
import { ICategoryState } from '../../features/modules/category/store';


export interface IAppState {
  router?: RouterReducerState;
  product: IProductState;
  category: ICategoryState;
}

export const initialAppState: IAppState = {
  product: null,
  category: null
};

export function getInitialState(): IAppState {
  return initialAppState;
}

export const getAppState = (state: IAppState) => state;
