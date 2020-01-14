import { ICustomer } from 'src/app/interfaces';

export interface IHomeState {
  customersList: ICustomer[];
  isLoading: boolean;
  isProcessing: boolean;
}


export const initialHomeState: IHomeState = {
  customersList: [],
  isLoading: false,
  isProcessing: false
};
