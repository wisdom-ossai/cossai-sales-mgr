import { ICategory } from 'src/app/interfaces';

export interface ICategoryState {
  data: ICategory[];
  isLoading: boolean;
  isProcessing: boolean;
  singleCategory: ICategory;
  saveSuccess: boolean;
}


export const initialCategoryState: ICategoryState = {
  data: [],
  isLoading: false,
  isProcessing: false,
  singleCategory: null,
  saveSuccess: false

};

export function getInitialCategoryState(): ICategoryState {
  return initialCategoryState;
}
