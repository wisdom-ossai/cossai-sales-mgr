import { ICustomerState } from 'src/app/customer/store';

export interface IAppState {
  // userData: IUserState;
  customerData: ICustomerState;
}


export const initialAppState: IAppState = {
  // userData: null,
  customerData: null
};

export function getInitialAppState(): IAppState {
  return initialAppState;
}

export const getAppState = (state: IAppState) => state;
