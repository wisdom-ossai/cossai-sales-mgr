import { IAddress } from './address.interface';
import { IMetadata } from './metadata.interface';

export interface ICustomer {
  id: string;
  customerNumber: string;
  first_name: string;
  last_name: string;
  email: string;
  birthDate: Date;
  gender: string;
  createdAt: Date;
  updatedAt: Date;
  role: string;
  username: string;
  billing: IAddress;
  shipping: IAddress;
  is_paying_customer: boolean;
  avatar_url: string;
  meta_data: IMetadata[];
}
