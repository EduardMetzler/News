import { Action } from "redux";
import { AuthStore } from "./auth.model";
// import { UserStore } from "../user/user.model";

import {
  REGISTER,
  LOGIN,
  LOGIN_SuCCESS,
  LOGOUT,
  REGISTER_FAIL,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  NEW_SETERROR,
  newSetError,
  IS_FORM_VALIDATION,
  NO_FORM_VALIDATION,
  NEW_PASSWORD_TEXT,
  NEW_PASSWORD_IS_SAVE
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
  logInError: "",
  isValid: false
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
        // isValid: true,

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
        // isAuthenticated: !!localStorage.getItem("token"),
        // token: ""
      };

    case NO_FORM_VALIDATION:
      return {
        ...state,
        isValid: false
      };
    case IS_FORM_VALIDATION:
      return {
        ...state,
        isValid: true
      };
    case NEW_PASSWORD_TEXT:
      return {
        ...state,
        isLoading: true
      };
    case NEW_PASSWORD_IS_SAVE:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
};
