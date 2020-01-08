import { ICustomer } from './customer.interface';
import { IProduct } from './product.interface';
import { IUser } from './user.interface';

export interface IOrder {
  id: string;
  customer: ICustomer;
  products: IProduct[];
  employee: IUser;
  delivered: boolean;
  deliveryDate: Date;
  attachments: string[];
}
