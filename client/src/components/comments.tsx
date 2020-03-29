import React, { useState } from "react";
import { MyComment } from "../store/comments/comments.model";

type CommentSend = (comment: any) => void;

interface ConnectedState {
  isAuthenticated: boolean;
  comments: MyComment[];
  isLoading: boolean;

  commentSend: CommentSend;
  id: string | undefined;
}

export const CommentsComponent: React.FC<ConnectedState> = ({
  isAuthenticated,
  isLoading,
  id,
  comments,
  commentSend
}) => {
  const [comment, setComment] = useState({ commentText: "" });
  const changeHandlerComment = (event: any) => {
    setComment({
      ...comment,
      commentText: event.target.value
    });
    console.log(comment.commentText);
  };

  const send = (event: any) => {
    console.log(comment.commentText);

    event.preventDefault();
    commentSend(comment);
    // setNewTodo("");
    setComment({
      ...comment,
      commentText: ""
    });
  };

  //   console.log(oneComment);
  return (
    <>
      {isAuthenticated ? (
        <form onSubmit={send}>
          {/* <form> */}
          <label htmlFor="text">Mein Kommentar</label>
          <textarea
            className="materialize-textarea"
            // type="text"
            name="Comment"
            id="Comment"
            placeholder="Ihre Kommentar"
            onChange={changeHandlerComment}
            value={comment.commentText}
          />
          <button
            // value={oneComment.commentText}
            type="submit"
            className="btn yellow darken-4 waves-effect waves-light"
            disabled={comment.commentText === "" || isLoading}
          >
            Mein Kommentar senden
          </button>
          <h5>alle Kommentarien:</h5>
          <div>
            {comments.map((oneComment, index) => {
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
// export const Comment = connect(mapStateToProps)(CommentsComponent);
