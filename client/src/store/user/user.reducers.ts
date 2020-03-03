import { Action } from "redux";

import { AuthStore } from "./user.model";
import {
  IST_AUTH,
  isAuth,
  SINGIN_USER,
  singInUser,
  NO_AUTH
} from "./user.actions";

const INITIAL_STATE = {
  isAuthenticated: false,
  userDaten: {},
  // token: localStorage.getItem("userId")
  token: ""
};
export default (
  state: AuthStore = INITIAL_STATE,
  action: Action
): AuthStore => {
  switch (action.type) {
    case IST_AUTH:
      return { ...state, isAuthenticated: true };
    case NO_AUTH:
      return { ...state, isAuthenticated: false };
    case SINGIN_USER:
      const { payload } = action as ReturnType<typeof singInUser>;
      // console.log(payload);
      return { ...state, token: payload, isAuthenticated: true };

    default:
      return state;
  }
};
