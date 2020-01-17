import { IMetadata } from './metadata.interface';

export interface ICouponLine {
  id: string;
  code: string;
  discount: number;
  discount_tax: number;
  meta_data: IMetadata[];
}
