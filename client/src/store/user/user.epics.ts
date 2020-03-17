import { ActionsObservable } from "redux-observable";

import { map, switchMap, filter, catchError } from "rxjs/operators";
// import { mergeMap, map, catchError, filter, switchMap } from "rxjs/operators";
import axios from "axios";

import { ajax } from "rxjs/ajax";
import { of } from "rxjs";
import { isOfType } from "typesafe-actions";
import // registerLogin
"./user.actions";
// import { useHistory } from "react-router-dom";
import { userSave, userLoad, USER_LOAD, ADMIN } from "../user/user.actions";
// import { useDispatch } from "react-redux";
import { newSetError } from "../auth/auth.actions";

const storageName = "userData";

interface getArticles {
  type: typeof ADMIN;
  payload: any;
}

const getNewUserLoadEpics = (
  action$: ActionsObservable<ReturnType<typeof userLoad>>
) =>
  action$
    .pipe(
      filter(isOfType(USER_LOAD)),

      // ofType<ReturnType<typeof admin>>(ADMIN),

      switchMap(({ payload }) => {
        return ajax({
          url: "api/userLoad",
          method: "POST",
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
        });
      })
    )
    .pipe(
      map(
        response => {
          if (response) {
            console.log("new load", response.response[0]._id);
            return userSave(
              response.response[0].firstName,
              response.response[0].lastName,
              response.response[0].admin
            );
          }
        },

        catchError(response =>
          of(newSetError(response.response.message, false))
        )

        // catchError(response => of(registerFail(response.response.message)))
      )
    );

export const userEpics = [getNewUserLoadEpics];
