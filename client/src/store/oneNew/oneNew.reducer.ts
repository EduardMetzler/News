import { Action } from "redux";
import { OneNewsStore } from "./oneNew.model";
import { SAVE_ONE_ARTICLE, saveOneArticle } from "./oneNew.action";

const INITIAL_STATE = {
  article: { title: "", text: "", _id: "" },
  loading: true
};

export default (
  state: OneNewsStore = INITIAL_STATE,
  action: Action
): OneNewsStore => {
  switch (action.type) {
    case SAVE_ONE_ARTICLE:
      const { payload } = action as ReturnType<typeof saveOneArticle>;

      return {
        ...state,
        article: payload
        // loading: false
      };
    // case LOAD_ONE_ARTICLES:
    //   const { payload } = action as ReturnType<typeof loadOneArticles>;

    //   return {
    //     ...state,
    //     article: payload
    //   };
    default:
      return state;
  }
};
