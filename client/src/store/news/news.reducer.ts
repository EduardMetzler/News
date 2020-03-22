import { Action } from "redux";
import { NewsStore } from "./news.model";
import {
  newsSave,
  LOAD_ARTICLES,
  NEWS_SAVE,
  LOAD_ONE_ARTICLES,
  loadOneArticles
} from "./news.actions";

const INITIAL_STATE = {
  articles: [],
  article: {}
};

export default (
  state: NewsStore = INITIAL_STATE,
  action: Action
): NewsStore => {
  switch (action.type) {
    case NEWS_SAVE:
      const { payload } = action as ReturnType<typeof newsSave>;

      return {
        ...state,
        articles: payload.articles
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
