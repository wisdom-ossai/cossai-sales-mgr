import { IProduct } from './product.interface';

export interface ICategory {
  id: string;
  name: string;
  products: IProduct[];
  slug: string;
  description: string;
  createdAt: Date;
  updeatedAt: Date;
}
