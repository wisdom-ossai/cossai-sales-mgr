import { createSelector } from '@ngrx/store';

import { IAppState, getInitialState } from '@core/store/app.state';
import { IProductState } from './product.state';

export const getProductState = createSelector(
  getInitialState,
  (state: IAppState) => state.product
);

export const isLoadingProducts = createSelector(
  getProductState,
  (state: IProductState) => state.isLoading
);

export const isProcessingProduct = createSelector(
  getProductState,
  (state: IProductState) => state.isProcessing
);

export const getProductData = createSelector(
  getProductState,
  (state: IProductState) => state.data
);

export const getSaveStatus = createSelector(
  getProductState,
  (state: IProductState) => state.saveSuccess
);
