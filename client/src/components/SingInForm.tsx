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
  isAuthenticated: !!localStorage.getItem("token"),
  isLoading: state.auth.isLoading,
  logInError: state.auth.logInError,
  isValid: state.auth.isValid

  // isAuthenticated: state.auth.isAuthenticated
  // isAuthenticated: !state.user.userDaten
  // userDaten: state.user.userDaten
});

export const SingInFormComponent: React.FC<ConnectedState> = ({
  isAuthenticated,
  isLoading,
  logInError,
  isValid
}) => {
  // const counter = useSelector(state => state.auth.isLoading);

  const [formSingIn, setFormSingIn] = useState({
    email: "",
    password: ""
  });
  // const [formValid, setFormValid] = useState({
  //   Valid:0
  // })

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
  // useEffect(() => {
  // const token = localStorage.getItem("token");
  // const userId = localStorage.getItem("userId");
  //   const t =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTYxNzY0OWYwNmIwNzRlNjQ0MDZhNDIiLCJpYXQiOjE1ODM1MDYzNTksImV4cCI6MTU4MzUwOTk1OX0.daFK57Is2TkErQQf1kpyfb_ECbJxKOPBJ_TzSizoHxY";
  //   if (t) {
  //     // login(token,userId);
  //     console.log("autolog");
  //     dispatch(login(t));
  //   }
  // });

  // const validate = () => {
  //   if (!formSingIn.email.includes("@") || formSingIn.password.length < 5) {
  //     dispatch(noVormValidation());
  //   } else {
  //     dispatch(isVormValidation());
  //   }
  // };
  const changeHandlerSingIn = (event: any) => {
    setFormSingIn({
      ...formSingIn,
      [event.target.name]: event.target.value
    });
    // validate();
  };
  const singInFormPost = (event: any) => {
    // event.preventDefault();
    console.log(formSingIn);
    // alert(formSingIn.email);

    dispatch(login(formSingIn));
    // dispatch(loding(true));
    dispatch(newSetError("", true));
  };
  // useEffect(() => {
  //   if (logInError) {
  //     setFormSingIn({
  //       ...formSingIn,
  //       email: "",
  //       password: ""
  //     });
  //     console.log("er");
  //     // dispatch(newSetError("", false));
  //   }
  // });

  return (
    // <div>edewwe</div>
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
                    // className="yellow-input"
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
                    // className="yellow-input"
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
export const SingInForm = connect(mapStateToProps)(SingInFormComponent);
