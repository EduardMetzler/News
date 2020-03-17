import { Action } from "redux";
import { NewsStore } from "./news.model";
import {} from "./news.actions";

const INITIAL_STATE = {
  articles: []
};

export default (
  state: NewsStore = INITIAL_STATE,
  action: Action
): NewsStore => {
  switch (action.type) {
    default:
      return state;
  }
};
