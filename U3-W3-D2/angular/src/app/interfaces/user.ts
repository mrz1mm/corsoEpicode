export interface iUser {
  name: string;
  surname: string;
  gender?: string;
  dateBirth: Date | undefined;
  biography?: string;
  userImage?: string;
  username: string;
  email: string;
  password: string;
}
