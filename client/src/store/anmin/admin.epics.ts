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
  ARTICLE_CREATE,
  newAdmin,
  NEW_ADMIN,
  advertisingCreat,
  ADVERTISING_CREATE
} from "../anmin/admin.actions";
// import { useDispatch } from "react-redux";
import { registerFail, registerSucces } from "../auth/auth.actions";
import { ADVERTISING_LOAD } from "../advertising/advertising.action";

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

const postAdvertisingEpic = (
  action$: ActionsObservable<ReturnType<typeof advertisingCreat>>
) =>
  action$
    .pipe(
      ofType<ReturnType<typeof advertisingCreat>>(ADVERTISING_CREATE),

      switchMap(({ payload }) => {
        // console.log("4d34d");
        return ajax({
          url: "api/advertisingCreate",
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
    );
const newAdminEpic = (
  action$: ActionsObservable<ReturnType<typeof newAdmin>>
) =>
  action$
    .pipe(
      filter(isOfType(NEW_ADMIN)),
      // ofType<ReturnType<typeof admin>>(ADMIN),

      switchMap((action: any) => {
        const id = action.payload.id;
        console.log(id);
        return ajax({
          url: "api/admin/newAdmin",
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: { id }
        });
      })
    )
    .pipe(
      map(
        response => {
          if (response) {
            // console.log(response.response);
            // return userListe(response.response);
          }
        },
        // response => userListe(response.response.users[1]),

        catchError(response => of(registerFail(response.response.message)))
      )
    );

export const adminEpics = [
  getAdmin,
  postArticleEpic,
  newAdminEpic,
  postAdvertisingEpic
];
