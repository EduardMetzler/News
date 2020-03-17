import { LogInFormError } from "./error.model";

export const GET_ERRORS = "GET_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const REGISTER_FORM_ERRORS = "CLEAR_ERRORS";

export const registerFormErrors = (date: LogInFormError) => ({
  type: REGISTER_FORM_ERRORS,
  payload: date
});
