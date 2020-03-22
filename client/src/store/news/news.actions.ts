import { Article } from "./news.model";

export const LOAD_ARTICLES = "LOAD_ARTICLES";
export const NEWS_SAVE = "NEWS_SAVE";
export const LOAD_ONE_ARTICLES = "LOAD_ONE_ARTICLES";
export const ONE_NEWS_SAVE = " ONE_NEWS_SAVE";

export const loadArticles = () => ({
  type: LOAD_ARTICLES,
  payload: {}
});
export const newsSave = (articles: Article[]) => ({
  type: NEWS_SAVE,
  payload: { articles }
});

export const loadOneArticles = () => ({
  type: LOAD_ONE_ARTICLES,
  payload: {}
});

export const oneNewSave = (article: Article) => ({
  type: ONE_NEWS_SAVE,
  payload: { article }
});
