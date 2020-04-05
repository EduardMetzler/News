import { combineReducers } from "redux";
import { applyMiddleware, createStore, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";
// import { viewEpics } from "./view/view.epics";
// import { newsEpics } from "./news/news.epics";
import { authEpics } from "./auth/auth.epics";

import { userEpics } from "./user/user.epics";
import { adminEpics } from "./anmin/admin.epics";
import { newsEpics } from "./news/news.epics";
import { commentEpics } from "./comments/comments.epics";
import { oneNewEpics } from "./oneNew/oneNew.epics";
import { advertisingEpics } from "./advertising/advertising.epis";

// import viewReducer from "./view/view.redcusers";
// import newsReducer from "./news/news.reducers";
// import userReducer from "./user/user.reducers";
import errorReducer from "./error/error.reducer";
import authReducer from "./auth/auth.reducer";
import userReducer from "./user/user.reducer";
import adminReducer from "./anmin/admin.reducer";
import newsReducer from "./news/news.reducer";
import commentsReducer from "./comments/comments.reducer";
import oneNewReducer from "./oneNew/oneNew.reducer";
import advertisingReducer from "./advertising/advertising.reducer";

const epic = combineEpics(
  ...authEpics,
  ...userEpics,
  ...adminEpics,
  ...newsEpics,
  ...commentEpics,
  ...oneNewEpics,
  ...advertisingEpics
);
const epicDependencies = {};
const epicMiddleware = createEpicMiddleware({ dependencies: epicDependencies });

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      // user: userReducer,
      logInFormError: errorReducer,
      auth: authReducer,
      user: userReducer,
      admin: adminReducer,
      news: newsReducer,
      comments: commentsReducer,
      oneNew: oneNewReducer,
      advertising: advertisingReducer
    }),
    undefined,
    composeWithDevTools(compose(applyMiddleware(epicMiddleware)))
  );
  epicMiddleware.run(epic);

  return store;
};

// window.__REDUX_DEVTOOLS_EXTENSION__ &&
// window.__REDUX_DEVTOOLS_EXTENSION__()

// export const configureStore = () => {
//   const store = createStore(
//     combineReducers({ news: newsReducer }),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );

//   return store;
// };
