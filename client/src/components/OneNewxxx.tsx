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
import { Comment } from "./commentsxxx";

import { useParams } from "react-router-dom";
import { allComments } from "../store/comments/comments.action";
import { MyComment } from "../store/comments/comments.model";

interface ConnectedState {
  // userDaten: Object | undefined;
  // isAuthenticated: boolean;
  articles: Article[];
  isAuthenticated: boolean;
  comment: MyComment[];
}

const mapStateToProps = (state: AppState) => ({
  articles: state.news.articles,
  isAuthenticated: state.auth.isAuthenticated,
  comment: state.comments.comment

  //   isAuthenticated: state.auth.isAuthenticated

  // isAuthenticated: !!localStorage.getItem("token")
  // userDaten: state.user.userDaten
});

export const OneNewsComponent: React.FC<ConnectedState> = ({
  articles,
  isAuthenticated,
  comment
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  let { id } = useParams();
  console.log(id);
  console.log(articles);
  useEffect(() => {
    if (articles.length < 1) {
      dispatch(loadArticles());
    }
  });
  // window.location.reload();
  if (comment.length !== 0) {
    // const { id } = useParams();
    // console.log(id);
    // dispatch(allComments([]));
  }

  // if (comment.length !== 0) {
  //   // const { id } = useParams();
  //   // console.log(id);
  //   dispatch(allComments([]));
  // }
  // const refreshPage = () => {
  //   window.location.reload();
  // };

  return (
    <div className="row">
      <div className="col s8 offset-s2">
        {" "}
        {articles.map(article => {
          return (
            <div key={article._id}>
              <div>
                {article._id === id ? (
                  <div>
                    <h5>{article.title}</h5>
                    <h6>{article.text}</h6>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
        <Comment />
      </div>
      <div></div>
    </div>
  );
};

export const OneNew = connect(mapStateToProps)(OneNewsComponent);
