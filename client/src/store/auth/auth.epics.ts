import { ActionsObservable, ofType } from "redux-observable";
import React from "react";
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
  loginSuccess,
  LOGIN_SuCCESS,
  loding,
  registerFail,
  loginFail,
  registerSucces,
  REGISTER_SUCCESS,
  REGISTER_LOGIN
  // registerLogin
} from "./auth.actions";
import { useHistory } from "react-router-dom";
import { userSave } from "../user/user.actions";
import { useDispatch } from "react-redux";

const storageName = "userData";

interface getArticles {
  type: typeof LOGIN;
  payload: any;
}
interface getregisterSucce {
  type: typeof REGISTER_LOGIN;
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
      map(response => {
        if (response.status === 201) {
          console.log(response.response.message);
          return registerSucces();
        } else if (response.status !== 201) {
          console.log(response.response);

          console.log(response.response.message);

          return registerFail();
        }
      })
    );
// const getLoginEpic = (action$: ActionsObservable<ReturnType<typeof login>>) =>
//   action$
//     .pipe(
//       ofType<ReturnType<typeof login>>(LOGIN),

//       mergeMap(action => {
//         // const email = action.payload.daten.email;
//         // const password = action.payload.daten.password;

//         axios({
//           url: "api/signIn",
//           method: "post",
//           headers: {
//             "content-Type": "application/json"
//           },
//           data: {
//             email: action.payload.daten.email,
//             password: action.payload.daten.password
//           }
//         });
//         return [];
//       })
//     )
//     .pipe(
//       map(response => {
//         console.log(response.data);
//         //     console.log(response);
//         //     if (response.data.token && response.data.userId) {
//         //       console.log(response.response.firstName);
//         //       localStorage.setItem("token", response.response.token);
//         //       localStorage.setItem("userId", response.response.userId);
//         //       console.log(response);
//         //       console.log(response.response.message);
//         //       return (
//         //         loginSuccess(),
//         //         userSave(response.response.firstName, response.response.lastName)
//         //       );
//         //     } else if (!response.response.token || !response.response.userId) {
//         //       return loding(true);
//         //       // console.log(response.response.message);
//         //     }
//       })
//     );

// const postRegisterLoginEpic = (
//   action$: ActionsObservable<ReturnType<typeof registerSucces>>
// ) =>
//   action$.pipe(
//     filter(isOfType(REGISTER_SUCCESS)),
//     // ofType<ReturnType<typeof login>>(LOGIN),

//     mergeMap((action: getregisterSucce) => {
//       console.log(action);
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
//         //     userSave(response.response.firstName, response.response.lastName)
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

//             return (
//               loginSuccess(),
//               userSave(response.response.firstName, response.response.lastName)
//             );
//           } else if (!response.response.token || !response.response.userId) {
//             console.log(response.response.message);
//             return loginFail();
//           }
//           catchError(() => of(console.log("unbekante error")));
//         })
//       );
//     })
//   );

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
              loginSuccess(),
              userSave(response.response.firstName, response.response.lastName)
            );
          } else if (!response.response.token || !response.response.userId) {
            console.log(response.response.message);
            return loginFail();
          }
          // catchError(() => of(console.log("unbekante error")));
        }),
        catchError(() => of(console.log("unbekante error")))
      );
    })
  );

// .pipe(
//   // map((response: any) => console.log(response)),
//   catchError(() => of(console.log("  catchError")))
// );

// .pipe(
//   map(response => {
//     if (response.response.token && response.response.userId) {
//       console.log(response.response.firstName);
//       localStorage.setItem("token", response.response.token);
//       localStorage.setItem("userId", response.response.userId);

//       console.log(response);
//       console.log(response.response.message);

//       return (
//         loginSuccess(),
//         userSave(response.response.firstName, response.response.lastName)
//       );
//     } else if (!response.response.token || !response.response.userId) {
//       return loding(true);
//       // console.log(response.response.message);
//     }
//   })
// );

// const getLoginEpic = (action$: ActionsObservable<ReturnType<typeof login>>) =>
//   action$.pipe(
//     ofType<ReturnType<typeof login>>(LOGIN),

//     mergeMap(({ payload }) =>
//       ajax({
//         method: "POST",
//         url: "api/signIn",
//         body: { payload }
//       }).pipe(
//         map((resp: any) => console.log("ddddddddddddddddddddddddddddd")),
//         catchError(error => of(console.log(error)))
//       )
//     )
//   );

// const getLoginEpic = (action$: ActionsObservable<ReturnType<typeof login>>) =>
//   action$
//     .pipe(
//       ofType<ReturnType<typeof login>>(LOGIN),

//       switchMap(({ payload }) => {
//         const email = payload.daten.email;
//         const password = payload.daten.password;

//         return axios.post(`api/signIn`, { email, password });
//         // .then((res: any) => {
//         //   console.log(res.data.token);
//         // });
//       })
//     )
//     .pipe(
//       map(response => {
//         if (response.data.token && response.data.userId) {
//           console.log(response.data.firstName);
//           localStorage.setItem("token", response.data.token);
//           localStorage.setItem("userId", response.data.userId);

//           console.log(response);
//           console.log(response.data.message);

//           return (
//             loginSuccess(),
//             userSave(response.data.firstName, response.data.lastName)
//           );
//         } else {
//           console.log(response.data.message);
//         }
//       })
//     );

export const authEpics = [
  postRegisterEpic,
  // postRegisterLoginEpic,
  postLoginEpic
];
// return axios
//   .post("api/signIn", {
//     email: "eduard.metzler@mail.ru",
//     password: "000000"
//   })
//   .then(
//     response => {
//       console.log(response);
//     },
//     error => {
//       console.log(error);
//     }
//   );
