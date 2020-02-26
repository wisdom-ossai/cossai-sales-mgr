import { IToastrState, initialToastrState } from './toastr.state';
import { ToastrActions } from './toastr.actions';

export function toastrReducer(state: IToastrState = initialToastrState, action: ToastrActions) {
  switch (action.type) {
    default:
      return state;
  }
}
