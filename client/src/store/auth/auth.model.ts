export interface AuthStore {
  token: String | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  userDaten: Object;
  error: any;
  toSignIn: boolean;
  logInError: String;
  isValid: boolean;
}
