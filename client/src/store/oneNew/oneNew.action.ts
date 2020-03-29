import { OneArticle, OneNewsStore } from "./oneNew.model";

export const LOAD_ONE_ARTICLE = "LOAD_ONE_ARTICLE";
export const SAVE_ONE_ARTICLE = "SAVE_ONE_ARTICLE";

export const loadOneArticle = (id: any) => ({
  type: LOAD_ONE_ARTICLE,
  payload: { id }
});

export const saveOneArticle = (article: OneArticle) => ({
  type: SAVE_ONE_ARTICLE,
  payload: article
});
