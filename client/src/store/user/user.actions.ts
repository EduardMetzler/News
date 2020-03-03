// import { AuthStore } from "./user.model";
export const IST_AUTH = "IST_AUTH";
export const REGISTRATION_FORM_LOAD = "REGISTRATION_FORM_LOAD";
export const SINGIN_FORM_LOAD = "SINGIN_FORM_LOAD";
export const testAction = "testAction";
export const SINGIN_USER = "SINGIN_USER";
export const NO_AUTH = "NO_AUTH";

// export const out = () => ({
//   type: IST_AUTH,
//   payload: false
// });

// export const inS = () => ({
//   type: IST_AUTH,
//   payload: true
// });

export const isAuth = (data: any) => ({
  type: IST_AUTH,
  payload: data
});
export const noAuth = () => ({
  type: NO_AUTH,
  payload: false
});
export const testName = () => ({
  type: testAction,
  payload: {}
});

export const registrationFormLoad = (daten: Object) => ({
  type: REGISTRATION_FORM_LOAD,
  payload: daten
});

export const singInFormLoad = (daten: Object) => ({
  type: SINGIN_FORM_LOAD,
  payload: daten
});

export const singInUser = (userDaten: any) => ({
  type: SINGIN_USER,
  payload: userDaten
});
