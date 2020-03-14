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
import {
  userSave,
  userLoad,
  USER_LOAD,
  admin,
  ADMIN,
  userListe
} from "../user/user.actions";
import { useDispatch } from "react-redux";
import {
  loginSuccess,
  LOGIN_SuCCESS,
  newSetError,
  registerSucces,
  registerFail
} from "../auth/auth.actions";

const storageName = "userData";

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
          // body: {
          //   payload
          // }
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

      // mergeMap((action: getArticles) => {
      //   axios({
      //     method: "post",
      //     url: "api/admin",
      //     // data: yourData,
      //     headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
      //   });
      //   return [];
      // })
    );

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

// const postuserLoadEpic = (
//   action$: ActionsObservable<ReturnType<typeof userLoad>>
// ) =>
//   action$.pipe(
//     filter(isOfType(USER_LOAD)),
//     // ofType<ReturnType<typeof login>>(LOGIN),

//     mergeMap((action: getArticles) => {
//       //   const token = action.payload.daten.email;

//       return ajax({
//         url: "api/signIn",
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: {
//           //   email,
//           //   password
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
//               //   loginSuccess(),
//               userSave(response.response.firstName, response.response.lastName)
//             );
//           } else if (!response.response.token || !response.response.userId) {
//             console.log(response.response.message);
//             // return loginFail();
//           }
//           catchError(() => of(console.log("unbekante error")));
//         })
//       );
//     })
//   );

// const getUserDaten = (
//   action$: ActionsObservable<ReturnType<typeof loginSuccess>>
// ) =>
//   action$.pipe(
//     filter(isOfType(LOGIN_SuCCESS)),
//     map((action: any) => {

//     })
//   );

// // const email = action.payload.daten.email;
//     // const password = action.payload.daten.password;

//     return ajax({
//       url: "api/admin",
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")}`
//       }
//       // body: {}
//     }).pipe(map(response => console.log(response)));
//     // catchError(response => of(newSetError(response.response.message)))

export const userEpics = [getAdmin];
