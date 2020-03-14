export interface AuthStore {
  token: String | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  userDaten: Object;
  error: any;
  toSignIn: boolean;
  logInError: String;
  // user: Object;

  // user: {};
}
// export interface AuthStore {
//   isAuthenticated: boolean;
//   userDaten: Object;
//   token: String | null;
// }
