import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { ICustomerState } from './root.state';
import { homeReducer } from '../home';
import { environment } from 'src/environments/environment';

export const customerReducers: ActionReducerMap<ICustomerState> = {
  home: homeReducer
};


export const metaReducers: MetaReducer<ICustomerState>[] = !environment.production ? [] : [];
