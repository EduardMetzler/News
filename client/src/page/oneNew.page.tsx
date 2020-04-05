// import React, { useEffect } from "react";
// import { AppState } from "../store/model";
// import { connect } from "react-redux";
// import { useDispatch } from "react-redux";
// import { login } from "../store/auth/auth.actions";
// import { useParams } from "react-router-dom";
// import { OneNew } from "../components/OneNewxxx";

// interface ConnectedState {}

// const mapStateToProps = (state: AppState) => ({});
// export const OneNewsPage: React.FC<ConnectedState> = ({}) => {
//   const dispatch = useDispatch();
//   let { id } = useParams();
//   console.log(id);

//   //   return <OneNewComponent />;
//   return <OneNew />;
// };

import React, { useEffect, useState } from "react";

import { AppState } from "../store/model";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../store/auth/auth.actions";
import { useParams } from "react-router-dom";
import { OneNew } from "../components/OneNew";
import { CommentsComponent } from "../components/comments";
import { loadOneArticle } from "../store/oneNew/oneNew.action";
import { OneNewsStore, OneArticle } from "../store/oneNew/oneNew.model";
import {
  commentSave,
  allCommentsLoad
} from "../store/comments/comments.action";
import { MyComment } from "../store/comments/comments.model";

type CommentSend = (comment: any) => void;

interface ConnectedState {
  article: OneArticle;
  isAuthenticated: boolean;
  firstName: string;
  lastName: string;
  isLoading: boolean;
  comments: MyComment[];
}

const mapStateToProps = (state: AppState) => ({
  article: state.oneNew.article,
  isAuthenticated: state.auth.isAuthenticated,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  isLoading: state.comments.isLoading,
  comments: state.comments.comment
});
export const OneNewsPageComponent: React.FC<ConnectedState> = ({
  article,
  isAuthenticated,
  firstName,
  lastName,
  isLoading,
  comments
}) => {
  const [articleLoad, setNewLoad] = useState(true);
  const [commentLoad, setCommentLoad] = useState(true);

  const dispatch = useDispatch();
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    if (articleLoad) {
      dispatch(loadOneArticle(id));
      setNewLoad(false);
    }
  });

  const commentSend: CommentSend = (comment: any) => {
    console.log(comment);
    const newComment = {
      text: comment.commentText,
      firstName,
      lastName,
      owner: id
    };

    dispatch(commentSave(newComment));
    setCommentLoad(true);
  };
  useEffect(() => {
    if (commentLoad) {
      dispatch(allCommentsLoad(id));
      setCommentLoad(false);
    }
  });

  return (
    <>
      <OneNew article={article} />
      <CommentsComponent
        isAuthenticated={isAuthenticated}
        isLoading={isLoading}
        id={id}
        commentSend={commentSend}
        comments={comments}
      />
    </>
  );
};
export const OneNewsPage = connect(mapStateToProps)(OneNewsPageComponent);
