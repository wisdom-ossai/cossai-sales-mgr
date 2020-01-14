import { IOrder } from 'src/app/interfaces';

export interface IOrderState {
  data: IOrder[];
  isLoading: boolean;
  isProcessing: boolean;
}


export const initialOrderState: IOrderState = {
  data: [],
  isLoading: false,
  isProcessing: false
};

export function getInitialOrderState(): IOrderState {
  return initialOrderState;
}

export const getOrderState = (state: IOrderState) => state;
