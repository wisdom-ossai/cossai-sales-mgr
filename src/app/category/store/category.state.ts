import { ICategory } from 'src/app/interfaces';

export interface ICategoryState {
  data: ICategory[];
  isLoading: boolean;
  isProcessing: boolean;
}


export const initialCategoryState: ICategoryState = {
  data: [],
  isLoading: false,
  isProcessing: false
};

export function getInitialCategoryState(): ICategoryState {
  return initialCategoryState;
}

export const getCategoryState = (state: ICategoryState) => state;
