import { ICustomer } from 'src/app/interfaces';

export interface ICustomerState {
  data: ICustomer[];
  isLoading: boolean;
  isProcessing: boolean;
}


export const initialCustomerState: ICustomerState = {
  data: [],
  isLoading: false,
  isProcessing: false
};

export function getInitialCustomerState(): ICustomerState {
  return initialCustomerState;
}

export const getCustomerState = (state: ICustomerState) => state;
