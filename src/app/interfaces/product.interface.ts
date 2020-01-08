import { IUser } from './user.interface';

export interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  discount: number;
  photos: string;
  category: string;
  createdAt: Date;
  UpdatedAt: Date;
  createdBy: IUser;
}
