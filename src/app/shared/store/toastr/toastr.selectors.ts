
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IToastrState } from './toastr.state';

export const getToastState = createFeatureSelector<IToastrState>('toast');

export const showingToastr = createSelector(getToastState, (state: IToastrState) => state.show);
