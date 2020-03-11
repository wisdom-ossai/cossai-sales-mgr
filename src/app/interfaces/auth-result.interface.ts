import { IUser } from './user.interface';

export interface IAuthResult {
  ErrorMessage: string;
  Results: IUser[];
  token: string;
  Success: boolean;
}
