import { IProduct } from 'src/app/interfaces';

export interface IProductState {
  data: IProduct[];
  isLoading: boolean;
  isProcessing: boolean;
  saveSuccess: boolean;
}


export const initialProductState: IProductState = {
  data: [],
  isLoading: false,
  isProcessing: false,
  saveSuccess: false
};

export function getInitialProductState(): IProductState {
  return initialProductState;
}

// export const getProductState = (state: IProductState) => state;
