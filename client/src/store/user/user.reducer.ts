import { Action } from "redux";
import { UserStore } from "./user.model";
import { USER_SAVE, userSave, USER_LOAD, userLoad } from "./user.actions";
const INITIAL_STATE = {
  lastName: "",
  firstName: "",
  error: "",
  userLoad: false

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
        firstName: payload.firstName
      };
    case USER_LOAD:
      // const { payload } = action as ReturnType<typeof userLoad>;

      return {
        ...state
      };

    default:
      return state;
  }
};
