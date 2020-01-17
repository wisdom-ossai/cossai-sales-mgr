import { ITaxLine } from './tax-line.interface';
import { IMetadata } from './metadata.interface';

export interface IShippingLine {
  id: string;
  method_title: string;
  method_id: string;
  total: number;
  total_tax: number;
  taxes: ITaxLine[];
  meta_data: IMetadata[];
}
