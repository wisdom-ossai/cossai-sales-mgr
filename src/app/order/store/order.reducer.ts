import { IOrderState, initialOrderState } from './order.state';
import { OrderActions, OrderActionTypes } from './order.action';
import { MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';


export function orderReducer(state = initialOrderState, action: OrderActions): IOrderState {
  switch (action.type) {
    case OrderActionTypes.LOADING_DATA:
      return { ...state, isLoading: true };
    case OrderActionTypes.NOT_LOADING_DATA:
      return { ...state, isLoading: false };

    case OrderActionTypes.PROCESSING:
      return { ...state, isProcessing: true };
    case OrderActionTypes.NOT_PROCESSING:
      return { ...state, isProcessing: false };

    case OrderActionTypes.LOAD_DATA_SUCCESS:
      return { ...state, data: action.payload };
  }
}

export const metaReducers: MetaReducer<IOrderState>[] = !environment.production ? [] : [];
