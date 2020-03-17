import { ActionsObservable, ofType } from "redux-observable";

import { map, switchMap, filter, catchError } from "rxjs/operators";
// import { mergeMap, map, catchError, filter, switchMap } from "rxjs/operators";
import axios from "axios";

import { ajax } from "rxjs/ajax";
import { of } from "rxjs";
import { isOfType } from "typesafe-actions";

// import { useHistory } from "react-router-dom";
import {
  admin,
  ADMIN,
  userListe,
  articleCreate,
  ARTICLE_CREATE
} from "../anmin/admin.actions";
// import { useDispatch } from "react-redux";
import { registerFail, registerSucces } from "../auth/auth.actions";

interface getArticles {
  type: typeof ADMIN;
  payload: any;
}

const getAdmin = (action$: ActionsObservable<ReturnType<typeof admin>>) =>
  action$
    .pipe(
      filter(isOfType(ADMIN)),
      // ofType<ReturnType<typeof admin>>(ADMIN),

      switchMap(({ payload }) => {
        return ajax({
          url: "api/admin",
          method: "POST",
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
        });
      })
    )
    .pipe(
      map(
        response => {
          if (response) {
            console.log(response.response);
            return userListe(response.response);
          }
        },
        // response => userListe(response.response.users[1]),

        catchError(response => of(registerFail(response.response.message)))
      )
    );
const postArticleEpic = (
  action$: ActionsObservable<ReturnType<typeof articleCreate>>
) =>
  action$
    .pipe(
      ofType<ReturnType<typeof articleCreate>>(ARTICLE_CREATE),

      switchMap(({ payload }) => {
        return ajax({
          url: "api/articleCreate",
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: {
            payload
          }
        });
      })
    )
    .pipe(
      map(
        response => registerSucces(),

        catchError(response => of(registerFail(response.response.message)))
      )
      // map(response => {
      //   if (response.status === 201) {
      //     console.log(response.response.message);
      //     return registerSucces();
      //   } else if (response.status !== 201) {
      //     console.log(response.response);

      //     console.log(response.response.message);

      //     return registerFail();
      //   }
      // })
    );

export const adminEpics = [getAdmin, postArticleEpic];
