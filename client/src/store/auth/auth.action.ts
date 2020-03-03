// export const USER_LOADED = "USER_LOADED";
// export const USER_LOADING = "USER_LOADING";
// export const AUTH_ERROR = "AUTH_ERROR";
// export const LOGIN_SuCCESS = "LOGIN_SuCCESS";
// export const LOGIN_FAIL = "LOGIN_FAIL";
// export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
// export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
// export const REGISTER_FAIL = "REGISTER_FAIL";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SuCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "../types";
export const loadUser = (data: any) => ({
  type: USER_LOADING,
  payload: data
});
