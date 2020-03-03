export interface Auth {
  token: String | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: String;
}
