import { ActionsObservable, ofType } from "redux-observable";
// import React from "react";
import { map, switchMap, filter, mergeMap, catchError } from "rxjs/operators";
// import { mergeMap, map, catchError, filter, switchMap } from "rxjs/operators";
import axios from "axios";

import { ajax } from "rxjs/ajax";
import { of } from "rxjs";
import { isOfType } from "typesafe-actions";
import {
  REGISTER,
  register,
  login,
  LOGIN,
  LOGIN_SuCCESS,
  registerFail,
  registerSucces,
  REGISTER_LOGIN,
  newSetError

  // tokenSave
  // registerLogin
} from "./auth.actions";
// import { useHistory } from "react-router-dom";
import { userSave } from "../user/user.actions";
// import { useDispatch } from "react-redux";

const storageName = "userData";

interface getArticles {
  type: typeof LOGIN;
  payload: any;
}
interface getregisterSucce {
  type: typeof REGISTER_LOGIN;
  payload: any;
}

interface t {
  type: typeof LOGIN_SuCCESS;
  payload: any;
}
// const dispatch = useDispatch();

const postRegisterEpic = (
  action$: ActionsObservable<ReturnType<typeof register>>
) =>
  action$
    .pipe(
      ofType<ReturnType<typeof register>>(REGISTER),

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

// const postLoginEpic = (action$: ActionsObservable<ReturnType<typeof login>>) =>
//   action$.pipe(
//     filter(isOfType(LOGIN)),
//     // ofType<ReturnType<typeof login>>(LOGIN),

//     mergeMap((action: getArticles) => {
//       const email = action.payload.daten.email;
//       const password = action.payload.daten.password;

//       return ajax({
//         url: "api/signIn",
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: {
//           email,
//           password
//         }
//       }).pipe(
//         map(
//           (response: any) => {
//             userSave(response.response.firstName, response.response.lastName);
//             // tokenSave(response.response.token);
//             // localStorage.setItem("token", response.response.token);
//             // localStorage.setItem("userId", response.response.userId);
//           }
//           // console.log(response.response)
//           // loginSuccess(response.response)
//         ),
//         catchError(response => of(newSetError(response.response.message)))
//       );
//     })
//   );

// const getTokenEpic = (
//   action$: ActionsObservable<ReturnType<typeof loginSuccess>>
// ) => {
//   action$.pipe(
//     filter(isOfType(LOGIN_SuCCESS)),

//     map(
//       (action: any) => {
//         // const token = "action.payload.token";
//         const token = action.payload.token;
//         action.payload.forEach(a:any)=>{
//           console.log()
//         }

//         // console.log(token);

//         // localStorage.setItem("token", token);
//         // return tokenSave(token);
//       }

//     )

//   );
// };

const postLoginEpic = (action$: ActionsObservable<ReturnType<typeof login>>) =>
  action$.pipe(
    filter(isOfType(LOGIN)),
    // ofType<ReturnType<typeof login>>(LOGIN),

    mergeMap((action: getArticles) => {
      const email = action.payload.daten.email;
      const password = action.payload.daten.password;

      return ajax({
        url: "api/signIn",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: {
          email,
          password
        }
      }).pipe(
        // map(
        //   (response: any) =>
        //     loginSuccess(

        //     )
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

            return userSave(
              response.response.firstName,
              response.response.lastName,
              response.response.admin
            );
            // loginSuccess(
            //   response.response.firstName,
            //   response.response.lastName
            // );
          }
        }),
        // newSetError(response.response.message)
        catchError(response =>
          of(newSetError(response.response.message, false))
        )
      );
    })
  );

// const getNewUserLoadEpics = (
//   action$: ActionsObservable<ReturnType<typeof userLoad>>
// ) =>
//   action$
//     .pipe(
//       filter(isOfType(USER_LOAD)),

//       // ofType<ReturnType<typeof admin>>(ADMIN),

//       switchMap(({ payload }) => {
//         return ajax({
//           url: "api/userNewLoad",
//           method: "POST",
//           headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
//         });
//       })
//     )
//     .pipe(
//       map(
//         response => {
//           if (response) {
//             console.log("new load", response.response);
//             return userSave(
//               response.response.firstName,
//               response.response.lastName,
//               response.response.admin
//             );
//           }
//         },

//         catchError(response =>
//           of(newSetError(response.response.message, false))
//         )

//         // catchError(response => of(registerFail(response.response.message)))
//       )
//     );

export const authEpics = [postRegisterEpic, postLoginEpic];

// const postLoginEpic = (action$: ActionsObservable<ReturnType<typeof login>>) =>
//   action$.pipe(
//     filter(isOfType(LOGIN)),
//     // ofType<ReturnType<typeof login>>(LOGIN),

//     mergeMap((action: getArticles) => {
//       const email = action.payload.daten.email;
//       const password = action.payload.daten.password;

//       return ajax({
//         url: "api/signIn",
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: {
//           email,
//           password
//         }
//       }).pipe(
//         // map(
//         //   (response: any) =>
//         //     loginSuccess(

//         //     )
//         //   // loginSuccess()
//         // ),
//         // catchError((response: any) =>
//         //   of(console.log(response.response.message))
//         // )
//         map(response => {
//           if (response.response.token && response.response.userId) {
//             console.log(response.response.firstName);
//             localStorage.setItem("token", response.response.token);
//             localStorage.setItem("userId", response.response.userId);

//             console.log(response);
//             console.log(response.response.message);

//             return userSave(
//               response.response.firstName,
//               response.response.lastName,
//               response.response.admin
//             );
//             // loginSuccess(
//             //   response.response.firstName,
//             //   response.response.lastName
//             // );
//           }
//         }),

//         catchError(response => of(newSetError(response.response.message)))
//       );
//     })
//   );
