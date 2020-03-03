import React from "react";
import { AppState } from "../store/model";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { isAuth } from "../store/user/user.actions";
// import { newsSaveArticles, newsCheckArticles } from "../store/news/new.action";
// import { Article } from "../store/news/news.model";
// import { NewsListe } from "../components/NewsListe";

// import { articles } from "../store/news/news.model";
// import { Article } from "../store/news/news.model";

// import { NewsMainComponent } from "../components/newsMainComponent";
interface ConnectedState {
  isAuthenticated: boolean;
}

const mapStateToProps = (state: AppState) => ({
  // articles: state.news.articles
  // showAllNews: state.view.showAllNews,
  // error: state.view.error,
  // isLoading: state.view.isLoading
  // isAuthenticated: state.auth.isAuthenticated
  isAuthenticated: state.user.isAuthenticated
});
export const NewsComponent: React.FC<ConnectedState> = ({
  isAuthenticated
}) => {
  const dispatch = useDispatch();

  return (
    <div>
      {/* <button onClick={() => dispatch(isAuth())}>test</button> */}
      {/* <div>{isAuthenticated}</div> */}
    </div>
  );
};

export const News = connect(mapStateToProps)(NewsComponent);
