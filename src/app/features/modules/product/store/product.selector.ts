import { createSelector, createFeatureSelector } from '@ngrx/store';

import { IProductState } from './product.state';


export const getProductState = createFeatureSelector<IProductState>('product');

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

export const getSingleProductData = createSelector(
  getProductState,
  (state: IProductState) => state.singleProduct
);

export const getSaveStatus = createSelector(
  getProductState,
  (state: IProductState) => state.saveSuccess
);
