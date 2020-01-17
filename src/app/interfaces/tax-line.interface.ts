import { IMetadata } from './metadata.interface';

export interface ITaxLine {
  id: string;
  rate_code: string;
  rate_id: string;
  label: string;
  compound: boolean;
  tax_total: string;
  shipping_tax_total: number;
  meta_data: IMetadata[];
}
