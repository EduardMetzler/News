// import { ViewStore } from "./view/view.model";
// import { NewsStore } from "./news/news.model";
import { AuthStore } from "./user/user.model";
import { Error } from "./error/error.model";

export interface AppState {
  // news: NewsStore;
  user: AuthStore;
  error: Error;
}
