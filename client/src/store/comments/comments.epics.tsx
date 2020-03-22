import { ActionsObservable } from "redux-observable";
import {
  commentSave,
  COMMENT_SAVE,
  commentIsSave,
  allComments,
  ALL_COMMENTS,
  ALL_COMMENTS_LOAD,
  allCommentsLoad
} from "./comments.action";
import { isOfType } from "typesafe-actions";
import { mergeMap, filter, map, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { of } from "rxjs";
import { newSetError } from "../auth/auth.actions";
// interface getArticles {
//   type: typeof LOAD_ARTICLES;
//   payload: any;
// }
const postCommentEpic = (
  action$: ActionsObservable<ReturnType<typeof commentSave>>
) =>
  action$.pipe(
    filter(isOfType(COMMENT_SAVE)),
    mergeMap(payload =>
      ajax({
        url: "api/commentSave",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: {
          payload
        }
      }).pipe(
        map((response: any) => commentIsSave()),

        catchError(() => of(newSetError("response.message", false)))
      )
    )
  );

const getAllCommentEpic = (
  action$: ActionsObservable<ReturnType<typeof allCommentsLoad>>
) =>
  action$.pipe(
    filter(isOfType(ALL_COMMENTS_LOAD)),

    mergeMap((payload: any) =>
      ajax({
        // url: `api/allComments/${payload}`,
        url: `api/allComments/`,

        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },

        body: {
          payload
        }
      }).pipe(
        map((response: any) => allComments(response.response)),

        // map((response: any) => {
        //   console.log(response);
        // }),

        catchError(() => of(newSetError("response.message", false)))
      )
    )
  );
export const commentEpics = [postCommentEpic, getAllCommentEpic];
