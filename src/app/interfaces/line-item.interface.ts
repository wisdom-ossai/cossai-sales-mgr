import { IProduct } from './product.interface';
import { ITaxLine } from './tax-line.interface';
import { IMetadata } from './metadata.interface';

export interface ILineItem {
  id: number;
  product: IProduct;
  variation_id: number;
  quantity: number;
  subtotal: number;
  subtotal_tax: number;
  total: number;
  total_tax: number;
  taxes: ITaxLine[];
  meta_data: IMetadata[];
  sku: string;
}
