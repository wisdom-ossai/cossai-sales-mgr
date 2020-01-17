import { ITaxLine } from './tax-line.interface';
import { IMetadata } from './metadata.interface';

export interface IFeeLine {
  id: string;
  name: string;
  tax_class: string;
  tax_status: string;
  total: number;
  total_tax: number;
  taxes: ITaxLine[];
  meta_data: IMetadata[];
}
