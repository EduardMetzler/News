// import { ViewStore } from "./view/view.model";
// import { NewsStore } from "./news/news.model";
import { AuthStore } from "./auth/auth.model";
import { Error } from "./error/error.model";
import {UserStore} from "./user/user.model"

export interface AppState {
  // news: NewsStore;
  auth: AuthStore;
  error: Error;
  user:UserStore
}
