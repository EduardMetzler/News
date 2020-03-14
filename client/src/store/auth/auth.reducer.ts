import { Action } from "redux";
import { AuthStore } from "./auth.model";
import { UserStore } from "../user/user.model";

import {
  REGISTER,
  LOGIN,
  LOGIN_SuCCESS,
  LOGOUT,
  LOADING,
  REGISTER_FAIL,
  LOGIN_FAIL,
  loginFail,
  REGISTER_SUCCESS,
  loding,
  NEW_SETERROR,
  loginSuccess,
  TOKEN_SAVE,
  newSetError
  // tokenSave
} from "./auth.actions";

const INITIAL_STATE = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  toSignIn: false,
  firstName: "",
  lastName: "",

  isLoading: false,
  userDaten: {},
  error: "",
  logInError: ""
  // token: String | null;
  // isAuthenticated: boolean;
  // isLoading: boolean;
};

export default (
  state: AuthStore = INITIAL_STATE,
  action: Action
): AuthStore => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_SuCCESS:
      // const { payload } = action as ReturnType<typeof loginSuccess>;

      return {
        ...state,
        isAuthenticated: true,

        // isAuthenticated: !!localStorage.getItem("token"),
        isLoading: false
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoading: false
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: !!localStorage.getItem("token")
      };
    // case LOADING:
    // const { payload } = action as ReturnType<typeof loding>;

    //   return {
    //     ...state,
    //     isLoading: payload1.daten
    //   };

    case LOGIN_FAIL:
      // const { payload } = action as ReturnType<typeof loginFail>;

      return {
        ...state,
        // error: payload.message,
        isLoading: false
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        toSignIn: true
      };
    case LOGIN:
      return {
        ...state,
        isLoading: true
      };
    // case REGISTER:
    //   const { payload } = action as ReturnType<typeof register>;

    //   return {
    //     ...state,
    //     isLoading: payload
    //   };

    case LOGIN_SuCCESS:
      // const { payload } = action as ReturnType<typeof loginSuccess>;

      return {
        ...state,
        isLoading: false
      };

    case NEW_SETERROR:
      const { payload } = action as ReturnType<typeof newSetError>;

      return {
        ...state,
        isLoading: payload.isload,
        logInError: payload.date
      };

    default:
      return state;
  }
};
