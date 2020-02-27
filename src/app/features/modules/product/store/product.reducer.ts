import { IProductState, initialProductState } from './product.state';
import { ProductActions, ProductActionTypes } from './product.action';


export function productReducer(state = initialProductState, action: ProductActions): IProductState {
  switch (action.type) {
    case ProductActionTypes.LOADING_DATA:
      return { ...state, isLoading: true };
    case ProductActionTypes.NOT_LOADING_DATA:
      return { ...state, isLoading: false };

    case ProductActionTypes.PROCESSING:
      return { ...state, isProcessing: true };
    case ProductActionTypes.NOT_PROCESSING:
      return { ...state, isProcessing: false };

    case ProductActionTypes.LOAD_DATA_SUCCESS:
      return { ...state, data: action.payload };

    case ProductActionTypes.LOAD_PRODUCT_DATA_SINGLE_SUCCESS:
      return { ...state, singleProduct: action.payload };

    case ProductActionTypes.SAVE_SUCCESS:
      return { ...state, saveSuccess: action.isSaved };
    default:
      return state;
  }
}
