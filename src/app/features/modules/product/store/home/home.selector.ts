import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IHomeState } from './home.state';
import { getCustomerState, ICustomerState } from '../root';



export const getHomeState = createSelector(
  getCustomerState,
  (state: ICustomerState) => state.home
);


export const isProcessingCustomer = createSelector(
  getHomeState,
  (state: IHomeState) => state.isProcessing
);

export const isLoadingCustomer = createSelector(
  getHomeState,
  (state: IHomeState) => state.isLoading
);

export const getDataCustomer = createSelector(
  getHomeState,
  (state: IHomeState) => state.customersList
);
