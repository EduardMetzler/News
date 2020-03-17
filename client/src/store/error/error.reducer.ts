import { Action } from "redux";
import { Error, LogInFormError } from "./error.model";
import { GET_ERRORS, CLEAR_ERRORS } from "../types";
import { REGISTER_FORM_ERRORS, registerFormErrors } from "./error.action";
const INITIAL_STATE = {
  // msg: {},
  // status: "fef",
  // id: ""
  email: "",
  password: "",
  touched: false,
  message: ""
};

export default (
  state: LogInFormError = INITIAL_STATE,
  action: Action
): LogInFormError => {
  switch (action.type) {
    // case CLEAR_ERRORS:
    //   return {
    //     msg: {},
    //     status: "",
    //     id: ""
    //   };
    case REGISTER_FORM_ERRORS:
      const { payload } = action as ReturnType<typeof registerFormErrors>;

      return {
        ...state,
        email: payload.email,
        password: payload.password
      };
    default:
      return state;
  }
};

// msg: action.payload.msg,
// status: action.payload.status
// id: action.payload.id
