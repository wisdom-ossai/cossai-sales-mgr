export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  fullName: string;
  birthDate: Date;
  gender: string;
  userType: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: {
    fullName: string;
    userNumber: string;
  };
}
