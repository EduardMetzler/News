import { Action } from "redux";
import { Auth } from "./auth.model";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SuCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL
} from "../types";
const INITIAL_STATE = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isLoading: false,
  user: ""
};

export default (state: Auth = INITIAL_STATE, action: Action): Auth => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOADING:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false
        // user: action.payload
      };
    case LOGIN_SuCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        // ...action.payload,
        isAuthenticated: true,
        isLoading: false
      };
    case AUTH_ERROR:
    case LOGOUT_SUCCESS:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        token: null,
        user: "",
        isAuthenticated: false,
        isLoading: false
      };

    default:
      return state;
  }
};
