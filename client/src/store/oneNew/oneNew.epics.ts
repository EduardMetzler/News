import { ActionsObservable } from "redux-observable";
import {
  loadOneArticle,
  LOAD_ONE_ARTICLE,
  saveOneArticle
} from "./oneNew.action";
import { isOfType, action } from "typesafe-actions";
import { mergeMap, filter, map, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { of } from "rxjs";
import { newSetError } from "../auth/auth.actions";
// interface getArticles {
//   type: typeof ALL_COMMENTS_LOAD;
//   payload: any;
// }

// import { a } from "./comments.model";

const getOneArticleEpic = (
  action$: ActionsObservable<ReturnType<typeof loadOneArticle>>
) =>
  action$.pipe(
    filter(isOfType(LOAD_ONE_ARTICLE)),

    mergeMap((action: any) =>
      ajax({
        url: `api/${action.payload.id}`,
        // url: `api/5e739c99a7dfcc46b07cd37d`,

        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }

        // body: {
        //   payload
        // }
      }).pipe(
        map((response: any) => saveOneArticle(response.response)),

        // map((response: any) => {
        //   if (response) {
        //     console.log(response.response);
        //   }
        // }),

        catchError(() => of(newSetError("response.message", false)))
      )
    )
  );
export const oneNewEpics = [getOneArticleEpic];
