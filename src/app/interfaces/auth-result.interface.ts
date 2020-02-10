import { IUser } from './user.interface';

export interface IAuthResult {
  message: string;
  user: IUser;
  token: string;
  success: boolean;
}
