import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import {
  login,
  newSetError,
  isVormValidation,
  noVormValidation
} from "../store/auth/auth.actions";
import "../index.css";
import { useHistory } from "react-router-dom";

import { AppState } from "../store/model";

interface ConnectedState {
  isAuthenticated: boolean;
  isLoading: boolean;
  logInError: String;
  isValid: boolean;

  // userDaten: Object | undefined;
}

const mapStateToProps = (state: AppState) => ({
  // isAuthenticated: !!localStorage.getItem("token"),
  // isLoading: state.auth.isLoading,
  // logInError: state.auth.logInError,
  // isValid: state.auth.isValid
});

export const SingInForm: React.FC<ConnectedState> = ({
  isAuthenticated,
  isLoading,
  logInError,
  isValid
}) => {
  const [formSingIn, setFormSingIn] = useState({
    email: "",
    password: ""
  });

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    // window.M.updateTextFields();
    if (isAuthenticated) {
      history.push("/");
    }
  });
  useEffect(() => {
    if (!formSingIn.email.includes("@") || formSingIn.password.length < 6) {
      dispatch(noVormValidation());
    } else {
      dispatch(isVormValidation());
    }
  });

  const changeHandlerSingIn = (event: any) => {
    setFormSingIn({
      ...formSingIn,
      [event.target.name]: event.target.value
    });
  };
  const singInFormPost = (event: any) => {
    console.log(formSingIn);

    dispatch(login(formSingIn));

    dispatch(newSetError("", true));
  };

  return (
    <form onSubmit={singInFormPost}>
      <div style={{ paddingTop: "100px" }}>
        <div className="row center ">
          <div className="col s8 offset-s2 ">
            <div className="card blue-grey darken-1 ">
              <div className="card-content white-text ">
                <span className="card-title">Anmeldung</span>

                <div className="input-field ">
                  <input
                    placeholder="Email eingeben"
                    value={formSingIn.email}
                    type="text"
                    name="email"
                    onChange={changeHandlerSingIn}
                  />
                  <label className="active" htmlFor="email">
                    Email
                  </label>
                </div>
                <div className="input-field ">
                  <input
                    placeholder="Passwort eingeben"
                    value={formSingIn.password}
                    type="password"
                    name="password"
                    onChange={changeHandlerSingIn}
                  />
                  <label className="active" htmlFor="password">
                    Passwort
                  </label>
                </div>
              </div>
              <div className="card-action">
                <button
                  type="submit"
                  className="btn yellow darken-4 waves-effect waves-light"
                  disabled={isLoading || !isValid}
                  onClick={singInFormPost}
                >
                  Fertig
                </button>
                {isLoading ? <div>Anmeldung...</div> : null}
                {logInError ? <div>{logInError}</div> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
// export const SingInForm = connect(mapStateToProps)(SingInFormComponent);
