import { Action } from "redux";
import { UserStore } from "./user.model";
import {
  USER_SAVE,
  userSave,
  USER_LOAD,
  userLoad,
  USER_DELETE,
  userDelete,
  ADMIN,
  userListe,
  USER_LISTE
} from "./user.actions";
const INITIAL_STATE = {
  lastName: "",
  firstName: "",
  isAdmin: false,
  error: "",
  userLoad: false,
  userListe: {}

  // token: String | null;
  // isAuthenticated: boolean;
  // isLoading: boolean;
};

export default (
  state: UserStore = INITIAL_STATE,
  action: Action
): UserStore => {
  switch (action.type) {
    case USER_SAVE:
      const { payload } = action as ReturnType<typeof userSave>;

      return {
        ...state,
        lastName: payload.lastName,
        firstName: payload.firstName,
        isAdmin: payload.admin
        // userLoad: true
      };
    case USER_DELETE:
      // const { payload } = action as ReturnType<typeof userDelete>;

      return {
        ...state,
        lastName: "",
        firstName: "",
        isAdmin: false
      };
    case USER_LOAD:
      // const { payload } = action as ReturnType<typeof userLoad>;

      return {
        ...state,
        error: "test"
      };

    // case USER_LISTE:
    //   const { payload } = action as ReturnType<typeof userListe>;
    //   return {
    //     ...state,
    //     userListe: payload
    //   };

    default:
      return state;
  }
};
