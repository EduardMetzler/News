// export interface Error {
//   msg: Object;
//   status: String;
//   id: String;
// }

export interface Error {
  // LogInFormError: LogInFormError;
}
export interface LogInFormError {
  email: string;
  password: string;
  touched: boolean;
  message: string;
}
