import { ProductEffect } from 'src/app/features/modules/product/store';
import { ToastEffects } from '@shared/store/toastr';
import { CategoryEffect } from 'src/app/features/modules/category/store';

export const AppEffects = [
  ProductEffect,
  CategoryEffect
];
