import React, { useEffect, useState } from "react";
import { AppState } from "../store/model";
import { useHistory } from "react-router-dom";

import { connect, useDispatch } from "react-redux";
// import { isAuth, singInUser, noAuth } from "../store/user/user.actions";
import { Link } from "react-router-dom";
import {
  logOut,
  login,
  loginSuccess,
  noVormValidation,
  isVormValidation
} from "../store/auth/auth.actions";
import { userLoad } from "../store/user/user.actions";
import { newsSave, loadArticles } from "../store/news/news.actions";
import { Article } from "../store/news/news.model";
import { useParams } from "react-router-dom";
import {
  commentSave,
  allCommentsLoad
} from "../store/comments/comments.action";
import { MyComment } from "../store/comments/comments.model";

interface ConnectedState {
  isAuthenticated: boolean;
  isLoading: boolean;
  newComment: MyComment;
  firstName: String;
  lastName: String;
  comment: MyComment[];
  // id: { id: "" };
  //   owner: String;
  //   id: "";
  //   newComment: { text: "text"; firstName: ""; lastName: ""; owner: "" };
  //   firstName: string;
  //   id?: string;
  //   myComment: {};
  //   isValid: boolean;
}

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.comments.isLoading,
  newComment: state.comments.newComment,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  comment: state.comments.comment

  //   owner: state.comments.newComment

  //   myComment: state.comments.comment
  //   logInError: state.auth.logInError,
  //   isValid: state.auth.isValid
});

export const CommentsComponent: React.FC<ConnectedState> = ({
  isAuthenticated,
  isLoading,
  firstName,
  lastName,
  comment
}) => {
  // useEffect(() => {
  const { id } = useParams();
  // console.log(id);
  // });

  const dispatch = useDispatch();
  // dispatch(allCommentsLoad(id));

  if (comment.length < 1) {
    // const { id } = useParams();
    console.log("id");
    dispatch(allCommentsLoad());
  }
  // dispatch(allCommentsLoad(id));

  const [oneComment, setMyComment] = useState({ commentText: "" });
  const changeHandlerComment = (event: any) => {
    setMyComment({
      ...oneComment,
      commentText: event.target.value
    });
    // console.log(oneComment.commentText);
  };
  const commentSend = (event: any) => {
    // event.preventDefault();

    const newComment = {
      text: oneComment.commentText,
      firstName,
      lastName,
      owner: id
    };
    console.log(newComment);
    dispatch(commentSave(newComment));

    // dispatch(commentSave(newComment));
  };
  //   useEffect(() => {
  //     if (myComment.commentText === "") {
  //       dispatch(noVormValidation());
  //     } else {
  //       dispatch(isVormValidation());
  //     }
  //   });
  return (
    <>
      {isAuthenticated ? (
        <form onSubmit={commentSend}>
          <label htmlFor="text">Mein Kommentar</label>
          <textarea
            className="materialize-textarea"
            // type="text"
            name="Comment"
            id="Comment"
            placeholder="Ihre Kommentar"
            onChange={changeHandlerComment}
          />
          <button
            value={oneComment.commentText}
            type="submit"
            className="btn yellow darken-4 waves-effect waves-light"
            // disabled={isLoading || !isValid}
            disabled={oneComment.commentText === "" || isLoading}

            //   onClick={singInFormPost}
          >
            Mein Kommentar senden
          </button>
          <h5>alle Kommentarien:</h5>
          <div>
            {comment.map((oneComment, index) => {
              return (
                <div key={index}>
                  <div>
                    {" "}
                    {oneComment.owner === id ? (
                      <div>
                        {" "}
                        <h5>
                          {oneComment.firstName}
                          {""} {oneComment.lastName}:
                        </h5>
                        <h6>{oneComment.text}</h6>
                        <div
                          style={{
                            width: "100%",
                            height: "1px",
                            background: "red"
                          }}
                        >
                          {" "}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
            <h1></h1>
          </div>
        </form>
      ) : (
        <h4 style={{ color: "red" }}>
          Melde dich an um ein Kommentar Schreiben zu können
        </h4>
      )}
    </>
  );
};
{
  /* <h5>
{oneComment.firstName}
{""} {oneComment.lastName}:
</h5>
<h6>{oneComment.text}</h6> */
}

export const Comment = connect(mapStateToProps)(CommentsComponent);
