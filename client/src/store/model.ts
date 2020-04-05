// import { ViewStore } from "./view/view.model";
// import { NewsStore } from "./news/news.model";
import { AuthStore } from "./auth/auth.model";
import { LogInFormError } from "./error/error.model";
import { UserStore } from "./user/user.model";
import { AdminStore } from "./anmin/admin.model";
import { NewsStore } from "./news/news.model";
import { CommentsStore } from "./comments/comments.model";
import { OneNewsStore } from "./oneNew/oneNew.model";
import { AdvertisingStore } from "./advertising/advertising.models";

export interface AppState {
  // news: NewsStore;
  admin: AdminStore;
  auth: AuthStore;
  logInFormError: LogInFormError;
  user: UserStore;
  news: NewsStore;
  comments: CommentsStore;
  oneNew: OneNewsStore;
  advertising: AdvertisingStore;
}
