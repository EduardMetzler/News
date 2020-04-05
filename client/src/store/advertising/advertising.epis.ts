import { ActionsObservable } from "redux-observable";
import {
  ADVERTISING_LOAD,
  advertisingsLoad,
  advertisingsSave
} from "./advertising.action";
import { isOfType } from "typesafe-actions";
import { mergeMap, filter, map, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { of } from "rxjs";
import { newSetError } from "../auth/auth.actions";

const getloadAdvertisings = (
  action$: ActionsObservable<ReturnType<typeof advertisingsLoad>>
) =>
  action$.pipe(
    filter(isOfType(ADVERTISING_LOAD)),
    mergeMap(() =>
      ajax({
        url: "api/advertisingsLoading",
        method: "GET"
      }).pipe(
        map((response: any) => advertisingsSave(response.response)),
        // map((response: any) => {
        //   if (response) {
        //     console.log(response.response);
        //   }
        // }),

        catchError(() => of(newSetError("response.message", false)))
      )
    )
  );

export const advertisingEpics = [getloadAdvertisings];
