import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { IAppState } from './app.state';
import { environment } from 'src/environments/environment';
import { customerReducer } from 'src/app/features/modules/customer/store';

export const appReducers: ActionReducerMap<IAppState> = {
  // userData: userDataReducer,
  customerData: customerReducer
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [] : [];
