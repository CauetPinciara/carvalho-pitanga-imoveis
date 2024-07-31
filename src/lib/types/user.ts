export enum Roles {
  Admin = "Admin",
  AgencyAdmin = "Agency Admin",
  Public = "Public",
}

export interface User {
  username: string;
  email: string;
  provider: string;
  password: string;
  resetPasswordToken?: string; // Optional field
  confirmationToken?: string; // Optional field
  confirmed: boolean;
  blocked: boolean;
  phone: string;
  role: Roles[];
}
