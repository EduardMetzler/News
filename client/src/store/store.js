import { combineReducers } from "redux";
import { applyMiddleware, createStore, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";
// import { viewEpics } from "./view/view.epics";
// import { newsEpics } from "./news/news.epics";
import { authEpics } from "./auth/auth.epics";
// import { userEpics } from "./user/user.epics";

// import viewReducer from "./view/view.redcusers";
// import newsReducer from "./news/news.reducers";
// import userReducer from "./user/user.reducers";
import errorReducer from "./error/error.reducer";
import authReducer from "./auth/auth.reducer";
import userReducer from "./user/user.reducer";

const epic = combineEpics(...authEpics);
const epicDependencies = {};
const epicMiddleware = createEpicMiddleware({ dependencies: epicDependencies });

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      // user: userReducer,
      errer: errorReducer,
      auth: authReducer,
      user: userReducer
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
