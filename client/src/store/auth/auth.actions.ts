// export const USER_LOADED = "USER_LOADED";
// export const USER_LOADING = "USER_LOADING";
// export const AUTH_ERROR = "AUTH_ERROR";
// export const LOGIN_SuCCESS = "LOGIN_SuCCESS";
// export const LOGIN_FAIL = "LOGIN_FAIL";
// export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
// export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
// export const REGISTER_FAIL = "REGISTER_FAIL";

import { AuthStore } from "./auth.model";
import axios from "axios";

export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const LOGIN_SuCCESS = "LOGIN_SuCCESS";
export const LOGOUT = "LOGOUT";
export const LOADING = "LOADING";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_LOGIN = "REGISTER_LOGIN";
export const NEW_SETERROR = "NEW_SETERROR";

export const LOGIN_FAIL = "LOGIN_FAIL";

export const register = (daten: Object) => ({
  type: REGISTER,
  payload: daten
});

export const login = (daten: any) => ({
  type: LOGIN,
  payload: { daten }
});

export const loginSuccess = () => ({
  type: LOGIN_SuCCESS,
  payload: {}
});

export const logOut = () => ({
  type: LOGOUT,
  payload: {}
});

export const loding = (daten: boolean) => ({
  type: LOADING,
  payload: { daten }
});

export const registerFail = () => ({
  type: REGISTER_FAIL,
  payload: {}
});

export const loginFail = () => ({
  type: LOGIN_FAIL,
  payload: {}
});
export const registerSucces = () => ({
  type: REGISTER_SUCCESS,
  payload: {}
});

export const newSetError = (date: any) => ({
  type: NEW_SETERROR,
  payload: { date }
});

// export const test = (daten: any) => {
//   return (dispatch: any) => {
//     dispatch(registerSucces);
//     axios
//       .post("https://jsonplaceholder.typicode.com/users")
//       .then(response => {
//         const users = response.data;
//         dispatch(registerSucces);
//       })
//       .catch(error => {
//         const errorMsg = error.message;
//         dispatch(registerSucces);
//       });
//   };
// };
