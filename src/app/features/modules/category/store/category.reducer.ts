import { ICategoryState, initialCategoryState } from './category.state';
import { CategoryActions, CategoryActionTypes } from './category.action';
import { MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';


export function categoryReducer(state = initialCategoryState, action: CategoryActions): ICategoryState {
  switch (action.type) {
    case CategoryActionTypes.LOADING_DATA:
      return { ...state, isLoading: true };
    case CategoryActionTypes.NOT_LOADING_DATA:
      return { ...state, isLoading: false };

    case CategoryActionTypes.PROCESSING:
      return { ...state, isProcessing: true };
    case CategoryActionTypes.NOT_PROCESSING:
      return { ...state, isProcessing: false };

    case CategoryActionTypes.LOAD_DATA_SUCCESS:
      return { ...state, data: action.payload };
  }
}

export const metaReducers: MetaReducer<ICategoryState>[] = !environment.production ? [] : [];
