import { createSelector, createFeatureSelector } from '@ngrx/store';

import { ICategoryState } from './category.state';


export const getCategoryState = createFeatureSelector<ICategoryState>('category');

export const isLoadingCategorys = createSelector(
  getCategoryState,
  (state: ICategoryState) => state.isLoading
);

export const isProcessingCategory = createSelector(
  getCategoryState,
  (state: ICategoryState) => state.isProcessing
);

export const getCategoryData = createSelector(
  getCategoryState,
  (state: ICategoryState) => state.data
);

export const getSingleCategoryData = createSelector(
  getCategoryState,
  (state: ICategoryState) => state.singleCategory
);

export const getSaveCategoryStatus = createSelector(
  getCategoryState,
  (state: ICategoryState) => state.saveSuccess
);
