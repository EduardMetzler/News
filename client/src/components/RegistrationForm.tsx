import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";

import "../index.css";
import { AppState } from "../store/model";
import {
  register,
  login,
  registerSucces,
  noVormValidation,
  isVormValidation
} from "../store/auth/auth.actions";
import { useHistory } from "react-router-dom";

interface ConnectedState {
  toSignIn: boolean;
  isAuthenticated: boolean;
  isLoading: boolean;
  isValid: boolean;
}

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: !!localStorage.getItem("token"),
  toSignIn: state.auth.toSignIn,
  isLoading: state.auth.isLoading,
  isValid: state.auth.isValid
});

export const RegistrationFormComponent: React.FC<ConnectedState> = ({
  isLoading,
  isAuthenticated,
  toSignIn,
  isValid
}) => {
  const [formRegister, setFormRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const history = useHistory();

  const dispatch = useDispatch();
  useEffect(() => {
    if (toSignIn) {
      history.push("/signIn");
      dispatch(isVormValidation());
    }
  });

  const changeHandlerRegister = (event: any) => {
    setFormRegister({
      ...formRegister,
      [event.target.name]: event.target.value
    });
  };
  useEffect(() => {
    if (
      !formRegister.email.includes("@") ||
      formRegister.password.length < 6 ||
      formRegister.firstName.length < 1 ||
      formRegister.lastName.length < 1
    ) {
      dispatch(noVormValidation());
    } else {
      dispatch(isVormValidation());
    }
  });
  const registrationFormPost = () => {
    console.log(formRegister);
    dispatch(register(formRegister));
  };

  return (
    <div style={{ paddingTop: "100px" }}>
      <div className="row center ">
        <div className="col s8 offset-s2 ">
          <div className="card blue-grey darken-1 ">
            <div className="card-content white-text ">
              <span className="card-title">Registrirung</span>
              <div className="input-field ">
                <input
                  placeholder="Vorname eingeben"
                  value={formRegister.firstName}
                  type="text"
                  name="firstName"
                  onChange={changeHandlerRegister}
                />
                <label className="active" htmlFor="firstName">
                  Vorname
                </label>
              </div>
              <div className="input-field ">
                <input
                  placeholder="Name eingeben"
                  value={formRegister.lastName}
                  type="text"
                  name="lastName"
                  onChange={changeHandlerRegister}
                />
                <label className="active" htmlFor="lastName">
                  Name
                </label>
              </div>
              <div className="input-field ">
                <input
                  placeholder="Email eingeben"
                  value={formRegister.email}
                  type="text"
                  name="email"
                  onChange={changeHandlerRegister}
                />
                <label className="active" htmlFor="email">
                  Email
                </label>
              </div>
              <div className="input-field ">
                <input
                  placeholder="Passwort eingeben"
                  value={formRegister.password}
                  type="password"
                  name="password"
                  onChange={changeHandlerRegister}
                />
                <label className="active" htmlFor="password">
                  Passwort
                </label>
              </div>
            </div>
            <div className="card-action">
              <button
                className="btn yellow darken-4 waves-effect waves-light"
                disabled={isLoading || !isValid}
                onClick={registrationFormPost}
              >
                Fertig
              </button>
              {isLoading ? <div>Registrirung...</div> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RegistrationForm = connect(mapStateToProps)(
  RegistrationFormComponent
);
