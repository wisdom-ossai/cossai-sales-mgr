import { IProductState, initialProductState } from '../../features/modules/product/store/product.state';


export interface IAppState {
  product: IProductState;
}

export const initialAppState: IAppState = {
  product: initialProductState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
