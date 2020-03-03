import { ActionsObservable, ofType } from "redux-observable";
// import { mergeMap, map, catchError, filter, switchMap } from "rxjs/operators";
import { switchMap, map, filter } from "rxjs/operators";
import { isOfType } from "typesafe-actions";

import { ajax } from "rxjs/ajax";
// import { of } from "rxjs";
// import { isOfType } from "typesafe-actions";
import {
  registrationFormLoad,
  REGISTRATION_FORM_LOAD,
  singInFormLoad,
  SINGIN_FORM_LOAD,
  singInUser,
  SINGIN_USER,
  isAuth,
  noAuth,
  NO_AUTH
} from "./user.actions";
// import { useCallback, useEffect } from "react";
// import { useHttp } from "../../hooks/http.hook";

const getRegistrationFormLoadEpic = (
  action$: ActionsObservable<ReturnType<typeof registrationFormLoad>>
) =>
  action$.pipe(
    ofType<ReturnType<typeof registrationFormLoad>>(REGISTRATION_FORM_LOAD),

    switchMap(({ payload }) => {
      return ajax({
        url: "api/registration",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: {
          payload
        }
      });
    })
  );
const getSingInFormLoadEpic = (
  action$: ActionsObservable<ReturnType<typeof singInFormLoad>>
) =>
  action$
    .pipe(
      ofType<ReturnType<typeof singInFormLoad>>(SINGIN_FORM_LOAD),

      switchMap(({ payload }) => {
        return ajax({
          url: "api/signIn",
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
      map(response => {
        if (response) {
          console.log(response.response.token);
          console.log(response);

          localStorage.setItem("token", response.response.token);

          return singInUser(response.response.token), isAuth(true);
        }
        // if (response["response"] && response["response"]["token"]) {
        //   console.log("________________SUCCESS");
        //   console.log(response["response"]["token"]);
        //   return doLoginUser(response["response"]["token"]);
        // console.log(response.response);
        // }
      })
    );

// const getisAuthEpic = (
//   action$: ActionsObservable<ReturnType<typeof singInUser>>
// ) =>
//   action$.pipe(
//     filter(isOfType(SINGIN_USER)),
//     map((action: any) => {
//       if (action.payload.token) {
//         console.log(action.payload.token);
//         // localStorage.setItem("userDaten", action.payload.token);
//         // localStorage.removeItem("userDaten");
//         return isAuth(true);
//       } else {
//         // console.log(action.payload.token);
//         return isAuth(false);
//       }
//     })
//     // map(action => isAuth(action))
//   );

// const getUserDaten = (
//   action$: ActionsObservable<ReturnType<typeof singInUser>>
// ) =>
//   action$.pipe(
//     filter(isOfType(SINGIN_USER)),
//     map((action: any) => {
//       if (action.payload.token) {
//         console.log(action.payload.token);
//         // localStorage.setItem("userDaten", action.payload.token);
//         // localStorage.removeItem("userDaten");
//         return isAuth(true);
//       } else {
//         console.log(action.payload.token);
//         return isAuth(false);
//       }
//     })
//     // map(action => isAuth(action))
//   );

export const userEpics = [getRegistrationFormLoadEpic, getSingInFormLoadEpic];
// .pipe(
//   map(response => {
//     if (response["response"] && response["response"]["token"]) {
//       console.log("________________SUCCESS");
//       console.log(response["response"]["token"]);

//       // return doLoginUser(response["response"]["token"]);
//     }
//   })
// );
///////////////////////////////////////////////////////////////////////////////////////
// const getRegistrationFormLoadEpic = (
//   action$: ActionsObservable<ReturnType<typeof registrationFormLoad>>
// ) =>
//   action$
//     .pipe(
//       ofType<ReturnType<typeof registrationFormLoad>>(REGISTRATION_FORM_LOAD),

//       switchMap(({ payload }) => {
//         return ajax({
//           url: "api/registration",
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: {
//             firstName: "payload.firstName",
//             lastName: "e",
//             email: "e",
//             password: "e"
//           }
//         });
//       })
//     )
//     .pipe(
//       map(response => {
//         if (response["response"] && response["response"]["token"]) {
//           console.log("________________SUCCESS");
//           console.log(response["response"]["token"]);

//           // return doLoginUser(response["response"]["token"]);
//         }
//       })
//     );

////////////////////////////////////////////////////////////////////////////////
// const getRegistrationFormLoadEpic = (
//   action$: ActionsObservable<ReturnType<typeof registrationFormLoad>>
// ) =>
//   action$.pipe(
//     filter(isOfType(REGISTRATION_FORM_LOAD)),
//     mergeMap(() =>
//       ajax({
//         url:
//           // "https://newsapi.org/v2/top-headlines?country=de&apiKey=059becd769be4624a38786f5e50c9ea7",
//           "api/registration",
//         method: "POST"
//       }).pipe(
//         map((response: any) => console.log(response)),
//         catchError(() => of(console.log("error")))
//       )
//     )
//   );
