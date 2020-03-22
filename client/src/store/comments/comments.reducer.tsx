import { Action } from "redux";
import { CommentsStore } from "./comments.model";
// import { UserStore } from "../user/user.model";

import {
  COMMENT_SAVE,
  COMMENT_IS_SAVE,
  ALL_COMMENTS,
  allComments,
  allCommentsLoad,
  ALL_COMMENTS_LOAD
} from "./comments.action";

const INITIAL_STATE = {
  comment: [],
  isLoading: false,
  newComment: { text: "", firstName: "", lastName: "", owner: "" },
  test: ""
  //   isValid: false
};

export default (
  state: CommentsStore = INITIAL_STATE,
  action: Action
): CommentsStore => {
  switch (action.type) {
    case COMMENT_SAVE:
      return {
        ...state,
        isLoading: true
      };

    case COMMENT_IS_SAVE:
      return {
        ...state,
        isLoading: false
      };
    case ALL_COMMENTS:
      const { payload } = action as ReturnType<typeof allComments>;

      return {
        ...state,
        comment: payload
      };
    // case ALL_COMMENTS_LOAD:
    //   const { payload } = action as ReturnType<typeof allCommentsLoad>;

    //   return {
    //     ...state,
    //     test: payload
    //   };
    default:
      return state;
  }
};
