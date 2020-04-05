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
import { AdvertisingLeft } from "./AdvertisingLeft";
import { Advertising } from "../store/advertising/advertising.models";
import { advertisingsLoad } from "../store/advertising/advertising.action";

interface ConnectedState {
  // userDaten: Object | undefined;
  // isAuthenticated: boolean;
  articles: Article[];
  advertisings: Advertising[];
}

const mapStateToProps = (state: AppState) => ({
  articles: state.news.articles,
  advertisings: state.advertising.advertisings
  //   isAuthenticated: state.auth.isAuthenticated
  // isAuthenticated: !!localStorage.getItem("token")
  // userDaten: state.user.userDaten
});

export const NewsComponent: React.FC<ConnectedState> = ({
  articles,
  advertisings
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (articles.length < 1) {
      dispatch(loadArticles());
      dispatch(advertisingsLoad());
    }
  });

  console.log(articles);

  return (
    <div className="row">
      <div className="col s2">
        <AdvertisingLeft advertisings={advertisings} />
      </div>
      <div className="col s8  section">
        {articles.map(article => {
          return (
            <Link key={article._id} to={`/${article._id}`}>
              <h5>{article.title}</h5>
              <div className="divider"></div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export const News = connect(mapStateToProps)(NewsComponent);
