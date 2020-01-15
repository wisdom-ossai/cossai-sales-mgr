import { ICustomerState, initialCustomerState } from './customer.state';
import { CustomerActions, CustomerActionTypes } from './customer.action';
import { MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';


export function customerReducer(state = initialCustomerState, action: CustomerActions): ICustomerState {
  switch (action.type) {
    case CustomerActionTypes.LOADING_DATA:
      return { ...state, isLoading: true };
    case CustomerActionTypes.NOT_LOADING_DATA:
      return { ...state, isLoading: false };

    case CustomerActionTypes.PROCESSING:
      return { ...state, isProcessing: true };
    case CustomerActionTypes.NOT_PROCESSING:
      return { ...state, isProcessing: false };

    case CustomerActionTypes.LOAD_DATA_SUCCESS:
      return { ...state, data: action.payload };
  }
}

export const metaReducers: MetaReducer<ICustomerState>[] = !environment.production ? [] : [];
