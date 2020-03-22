import { ActionsObservable } from "redux-observable";
import {
  LOAD_ARTICLES,
  loadArticles,
  newsSave,
  LOAD_ONE_ARTICLES,
  loadOneArticles,
  oneNewSave
} from "./news.actions";
import { isOfType } from "typesafe-actions";
import { mergeMap, filter, map, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { of } from "rxjs";
import { newSetError } from "../auth/auth.actions";
interface getArticles {
  type: typeof LOAD_ARTICLES;
  payload: any;
}
const getloadArticles = (
  action$: ActionsObservable<ReturnType<typeof loadArticles>>
) =>
  action$.pipe(
    filter(isOfType(LOAD_ARTICLES)),
    mergeMap(() =>
      ajax({
        url: "api/",
        method: "GET"
      }).pipe(
        map((response: any) => newsSave(response.response)),
        // map((response: any) => {
        //   if (response) {
        //     console.log(response.response);
        //   }
        // }),

        catchError(() => of(newSetError("response.message", false)))
      )
    )
  );

// const getloadOneArticles = (
//   action$: ActionsObservable<ReturnType<typeof loadOneArticles>>
// ) =>
//   action$.pipe(
//     filter(isOfType(LOAD_ONE_ARTICLES)),
//     mergeMap(() =>
//       ajax({
//         url: "api/:id",
//         method: "GET"
//       }).pipe(
//         map((response: any) => oneNewSave(response.response)),
//         // map((response: any) => {
//         //   if (response) {
//         //     console.log(response.response);
//         //   }
//         // }),

//         catchError(() => of(newSetError("response.message", false)))
//       )
//     )
//   );
export const newsEpics = [getloadArticles];
