import { MyComment, CommentsStore, a } from "./comments.model";

export const COMMENT_SAVE = "COMMENT_SAVE";
export const COMMENT_IS_SAVE = "COMMENT_IS_SAVE";
export const ALL_COMMENTS_LOAD = "ALL_COMMENTS_LOAD";
export const ALL_COMMENTS = "ALL_COMMENTS";
export const ALL_COMMENTS_CLEAR = "ALL_COMMENTS_CLEAR";

export const commentSave = (newComment: MyComment) => ({
  type: COMMENT_SAVE,
  payload: newComment
});

export const commentIsSave = () => ({
  type: COMMENT_IS_SAVE,
  payload: {}
});
export const allCommentsLoad = (id: any) => ({
  type: ALL_COMMENTS_LOAD,
  payload: { id }
});

export const allComments = (response: MyComment[]) => ({
  type: ALL_COMMENTS,
  payload: response
});

export const allCommentsClear = () => ({
  type: ALL_COMMENTS_CLEAR,
  payload: {}
});
