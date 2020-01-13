import { IHomeState } from '../home';
import { createFeatureSelector } from '@ngrx/store';


export interface ICustomerState {
  home: IHomeState;
}

export const initialCustomerState: ICustomerState = {
  home: null,
};

export const getCustomerState = createFeatureSelector<ICustomerState>('customers');
