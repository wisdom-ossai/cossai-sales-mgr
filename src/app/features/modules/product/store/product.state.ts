import { IProduct, ICategory } from 'src/app/interfaces';

export interface IProductState {
  data: IProduct[];
  singleProduct: IProduct;
  isLoading: boolean;
  isProcessing: boolean;
  saveSuccess: boolean;
  categories: ICategory[];
}


export const initialProductState: IProductState = {
  data: [],
  singleProduct: null,
  isLoading: false,
  isProcessing: false,
  saveSuccess: false,
  categories: null
};

export function getInitialProductState(): IProductState {
  return initialProductState;
}

// export const getProductState = (state: IProductState) => state;
