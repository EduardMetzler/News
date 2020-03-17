import React from "react";
interface ConnectedState {
  touched: boolean | undefined;
  message: string | undefined;
}
export const ErrorComponent: React.FC<ConnectedState> = ({
  touched,
  message
}) => {
  if (!touched) {
    return <div className="form-message invalid"></div>;
  }
  if (message) {
    return <div className="form-message invalid"> {message}</div>;
  }
  return <div className="form-message invalid">alles ok</div>;
};
// import React from "react";
// import { connect, useDispatch } from "react-redux";
// import { AppState } from "../store/model";
// import { LogInFormError } from "../store/error/error.model";
// interface ConnectedState {
//   // isAuthenticated: boolean;
//   // isLoading: boolean;
//   // logInError: String;
//   touched: boolean | undefined;
//   message: string | undefined;
//   // password: string;
//   // email: string;
// }

// const mapStateToProps = (state: AppState) => ({
//   email: state.logInFormError.email,
//   password: state.logInFormError.password,
//   touched: false,
//   message: ""
// });
// export const ErrorComponent: React.FC<ConnectedState> = ({
//   touched,
//   message
//   // password,
//   // email
// }) => {
//   if (!touched) {
//     return <div className="form-message invalid">eingabe</div>;
//   }
//   if (message) {
//     console.log(message);
//     return <div className="form-message invalid"> {message}</div>;
//   }
//   return <div className="form-message invalid">alles ok</div>;
// };
// export const LogInForm2 = connect(mapStateToProps)(ErrorComponent);
