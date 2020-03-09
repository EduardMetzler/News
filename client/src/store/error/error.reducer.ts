import { Action } from "redux";
import { Error } from "./error.model";
import { GET_ERRORS, CLEAR_ERRORS } from "../types";
const INITIAL_STATE = {
  msg: {},
  status: "fef",
  id: ""
};

export default (state: Error = INITIAL_STATE, action: Action): Error => {
  switch (action.type) {
    //     case GET_ERRORS:
    //       return {
    //    msg: action.payload.msg,
    // status: action.payload.status
    // id: action.payload.id
    //       };
    case CLEAR_ERRORS:
      return {
        msg: {},
        status: "",
        id: ""
      };

    default:
      return state;
  }
};

// msg: action.payload.msg,
// status: action.payload.status
// id: action.payload.id
