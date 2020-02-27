import { IProductState } from '../../features/modules/product/store/product.state';
import { RouterReducerState } from '@ngrx/router-store';


export interface IAppState {
  router?: RouterReducerState;
  product: IProductState;
}

export const initialAppState: IAppState = {
  product: null,
};

export function getInitialState(): IAppState {
  return initialAppState;
}

export const getAppState = (state: IAppState) => state;
