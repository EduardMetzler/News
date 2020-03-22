import React, { useEffect } from "react";
import { AppState } from "../store/model";
import { useHistory } from "react-router-dom";

import { connect, useDispatch } from "react-redux";
// import { isAuth, singInUser, noAuth } from "../store/user/user.actions";
import { Link } from "react-router-dom";
import { logOut, login, loginSuccess } from "../store/auth/auth.actions";
import { userLoad } from "../store/user/user.actions";
import { newsSave, loadArticles } from "../store/news/news.actions";
import { Article } from "../store/news/news.model";

interface ConnectedState {
  // userDaten: Object | undefined;
  // isAuthenticated: boolean;
  articles: Article[];
}

const mapStateToProps = (state: AppState) => ({
  articles: state.news.articles

  //   isAuthenticated: state.auth.isAuthenticated

  // isAuthenticated: !!localStorage.getItem("token")
  // userDaten: state.user.userDaten
});

export const NewsComponent: React.FC<ConnectedState> = ({ articles }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (articles.length < 1) {
      dispatch(loadArticles());
    }
  });
  console.log(articles);
  // const refreshPage = () => {
  //   window.location.reload();
  // };
  return (
    <>
      {articles.map(article => {
        return (
          <Link key={article._id} to={`/${article._id}`}>
            <div>{article.title}</div>
          </Link>
        );
      })}
    </>
  );
};

export const News = connect(mapStateToProps)(NewsComponent);
