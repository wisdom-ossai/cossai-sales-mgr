
import { MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { initialHomeState, IHomeState } from './home.state';
import { HomeActions, HomeActionTypes } from './home.action';


export function homeReducer(state = initialHomeState, action: HomeActions): IHomeState {
  switch (action.type) {
    case HomeActionTypes.LOADING_DATA:
      return { ...state, isLoading: true };
    case HomeActionTypes.NOT_LOADING_DATA:
      return { ...state, isLoading: false };

    case HomeActionTypes.PROCESSING:
      return { ...state, isProcessing: true };
    case HomeActionTypes.NOT_PROCESSING:
      return { ...state, isProcessing: false };

    case HomeActionTypes.LOAD_DATA_SUCCESS:
      return { ...state, customersList: action.payload };

    default: {
      return state;
    }
  }
}
