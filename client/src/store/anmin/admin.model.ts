export interface AdminStore {
  firstName: String;
  lastName: String;
  admin: boolean;
  userLoad: boolean;
  error: string;
  userListe: OneUserStore[];
  content: string;
}
export interface OneUserStore {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  admin: boolean;
  password: string;
}
