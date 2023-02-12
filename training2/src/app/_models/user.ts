export class UserModel {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  tel: string;
  is_customer: boolean;
  token?: string;
}