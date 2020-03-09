import { ActionsObservable, ofType } from "redux-observable";

import { map, switchMap, filter, mergeMap, catchError } from "rxjs/operators";
// import { mergeMap, map, catchError, filter, switchMap } from "rxjs/operators";
import axios from "axios";

import { ajax } from "rxjs/ajax";
import { of } from "rxjs";
import { isOfType } from "typesafe-actions";
import // registerLogin
"./user.actions";
import { useHistory } from "react-router-dom";
import { userSave, userLoad, USER_LOAD } from "../user/user.actions";
import { useDispatch } from "react-redux";

const storageName = "userData";

interface getArticles {
  type: typeof USER_LOAD;
  payload: any;
}

// const dispatch = useDispatch();

// const postRegisterEpic = (
//   action$: ActionsObservable<ReturnType<typeof register>>
// ) =>
//   action$
//     .pipe(
//       ofType<ReturnType<typeof register>>(REGISTER),

//       switchMap(({ payload }) => {
//         return ajax({
//           url: "api/registration",
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: {
//             payload
//           }
//         });
//       })
//     )
//     .pipe(
//       map(response => {
//         if (response.status === 201) {
//           console.log(response.response.message);
//           return registerSucces();
//         } else if (response.status !== 201) {
//           console.log(response.response);

//           console.log(response.response.message);

//           return registerFail();
//         }
//       })
//     );

const postuserLoadEpic = (
  action$: ActionsObservable<ReturnType<typeof userLoad>>
) =>
  action$.pipe(
    filter(isOfType(USER_LOAD)),
    // ofType<ReturnType<typeof login>>(LOGIN),

    mergeMap((action: getArticles) => {
      //   const token = action.payload.daten.email;

      return ajax({
        url: "api/signIn",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: {
          //   email,
          //   password
        }
      }).pipe(
        // map(
        //   (response: any) =>
        //     userSave(response.response.firstName, response.response.lastName)
        //   // loginSuccess()
        // ),
        // catchError((response: any) =>
        //   of(console.log(response.response.message))
        // )
        map(response => {
          if (response.response.token && response.response.userId) {
            console.log(response.response.firstName);
            localStorage.setItem("token", response.response.token);
            localStorage.setItem("userId", response.response.userId);

            console.log(response);
            console.log(response.response.message);

            return (
              //   loginSuccess(),
              userSave(response.response.firstName, response.response.lastName)
            );
          } else if (!response.response.token || !response.response.userId) {
            console.log(response.response.message);
            // return loginFail();
          }
          catchError(() => of(console.log("unbekante error")));
        })
      );
    })
  );

export const userEpics = [postuserLoadEpic];
