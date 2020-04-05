import { OneUserStore } from "./admin.model";
import { Article } from "../news/news.model";
import { Advertising } from "../advertising/advertising.models";

export const ADMIN = " ADMIN";
export const ALL_USERD = "ALL_USERD";

export const USER_LISTE = "USER_LISTE";
export const TO_ARTICLE_CREATE = "TO_ARTICLE_CREATE";

export const ARTICLE_CREATE = "ARTICLE_CREATE";
export const NEW_ADMIN = "NEW_ADMIN";
export const TO_ADVERTISING_CREATE = "TO_ADVERTISING_CREATE";
export const ADVERTISING_CREATE = "ADVERTISING_CREATE";

export const admin = () => ({
  type: ADMIN,
  payload: {}
});

export const userListe = (liste: OneUserStore[]) => ({
  type: USER_LISTE,
  payload: { liste }
});

export const allUsers = () => ({
  type: ALL_USERD,
  payload: {}
});

export const toArticleCreate = () => ({
  type: TO_ARTICLE_CREATE,
  payload: {}
});

export const articleCreate = (article: Article) => ({
  type: ARTICLE_CREATE,
  payload: { article }
});

export const advertisingCreat = (advertising: Advertising) => ({
  type: ADVERTISING_CREATE,
  payload: { advertising }
});

export const newAdmin = (id: string) => ({
  type: NEW_ADMIN,
  payload: { id }
});

export const toAdvertisingCreate = () => ({
  type: TO_ADVERTISING_CREATE,
  payload: {}
});
