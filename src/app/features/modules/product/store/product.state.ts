import { IProduct } from 'src/app/interfaces';

export interface IProductState {
  data: IProduct[];
  singleProduct: IProduct;
  isLoading: boolean;
  isProcessing: boolean;
  saveSuccess: boolean;
}


export const initialProductState: IProductState = {
  data: [],
  singleProduct: null,
  isLoading: false,
  isProcessing: false,
  saveSuccess: false
};

export function getInitialProductState(): IProductState {
  return initialProductState;
}

// export const getProductState = (state: IProductState) => state;
