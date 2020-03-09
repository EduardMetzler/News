import { Action } from "redux";
import { AuthStore } from "./auth.model";
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
  loding
} from "./auth.actions";
import { register } from "../../serviceWorker";
const INITIAL_STATE = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  toSignIn: false,

  isLoading: false,
  userDaten: {},
  error: ""
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
      return {
        ...state,
        isAuthenticated: !!localStorage.getItem("token"),
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
    default:
      return state;
  }
};
