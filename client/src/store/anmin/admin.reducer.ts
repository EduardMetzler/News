import { Action } from "redux";
import { AdminStore } from "./admin.model";
import {
  ADMIN,
  userListe,
  USER_LISTE,
  ALL_USERD,
  ARTICLE_CREATE,
  TO_ARTICLE_CREATE,
  TO_ADVERTISING_CREATE
} from "./admin.actions";
const INITIAL_STATE = {
  lastName: "",
  firstName: "",
  admin: false,
  error: "",
  userLoad: false,
  userListe: [],
  // userListe: [],

  content: ""

  // token: String | null;
  // isAuthenticated: boolean;
  // isLoading: boolean;
};

export default (
  state: AdminStore = INITIAL_STATE,
  action: Action
): AdminStore => {
  switch (action.type) {
    case USER_LISTE:
      const { payload } = action as ReturnType<typeof userListe>;
      return {
        ...state,
        userListe: payload.liste
      };
    case ALL_USERD:
      // const { payload } = action as ReturnType<typeof content>;
      return {
        ...state,
        content: "ALL_USERD"
      };
    case TO_ARTICLE_CREATE:
      // const { payload } = action as ReturnType<typeof content>;
      return {
        ...state,
        content: "TO_ARTICLE_CREATE"
      };

    case TO_ADVERTISING_CREATE:
      return {
        ...state,
        content: "TO_ADVERTISING_CREATE"
      };

    default:
      return state;
  }
};
