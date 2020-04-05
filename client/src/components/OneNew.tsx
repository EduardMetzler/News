import React from "react";
// import { AppStore } from "../store/store";
import { AppState } from "../store/model";
import { connect, useDispatch } from "react-redux";
import { loadOneArticle } from "../store/oneNew/oneNew.action";
import { useParams } from "react-router-dom";
import { OneArticle } from "../store/oneNew/oneNew.model";

interface ConnectedState {
  article: OneArticle;
}

// const mapStateToProps = (state: AppState) => ({});

export const OneNew: React.FC<ConnectedState> = ({ article }) => {
  const dispatch = useDispatch();
  // const { id } = useParams();
  //   dispatch(loadOneArticle(id));
  //   console.log(article);

  return (
    <div className="row">
      <div className="col s8 offset-s2 section">
        <h3>{article.title}</h3>
        <div>{article.text}</div>
      </div>
    </div>
  );
};

// export const OneNew = connect(mapStateToProps)(OneNewsComponent);
