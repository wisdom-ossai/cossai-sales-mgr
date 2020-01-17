import { IMetadata } from './metadata.interface';

export interface ITax {
  id: string;
  rate_code: string;
  rate_id: number;
  label: string;
  compound: boolean;
  tax_total: number;
  shipping_tax_total: number;
  meta_data: IMetadata[];
}
