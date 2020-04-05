import React from "react";
import { SingInForm } from "../components/SingInForm";
import { connect } from "react-redux";
import { AppState } from "../store/model";
import {
  login,
  newSetError,
  isVormValidation,
  noVormValidation
} from "../store/auth/auth.actions";
interface ConnectedState {
  isAuthenticated: boolean;
  isLoading: boolean;
  logInError: String;
  isValid: boolean;

  // userDaten: Object | undefined;
}

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: !!localStorage.getItem("token"),
  isLoading: state.auth.isLoading,
  logInError: state.auth.logInError,
  isValid: state.auth.isValid
});

export const SignInPageComponent: React.FC<ConnectedState> = ({
  isAuthenticated,
  isLoading,
  logInError,
  isValid
}) => {
  // return <div></div>;
  return (
    <SingInForm
      isAuthenticated={isAuthenticated}
      isLoading={isLoading}
      logInError={logInError}
      isValid={isValid}
    />
  );
};

export const SignIn = connect(mapStateToProps)(SignInPageComponent);
