import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import { singInFormLoad } from "../store/user/user.actions";
import "../index.css";
import { useHistory } from "react-router-dom";

import { AppState } from "../store/model";

interface ConnectedState {
  isAuthenticated: boolean;
  userDaten: Object | undefined;
}

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: state.user.isAuthenticated,
  // isAuthenticated: !state.user.userDaten
  userDaten: state.user.userDaten
});

export const SingInFormCom: React.FC<ConnectedState> = ({
  isAuthenticated,
  userDaten
}) => {
  const [formSingIn, setFormSingIn] = useState({
    email: "",
    password: ""
  });

  const dispatch = useDispatch();
  const history = useHistory();

  //   useEffect(() => {
  //     window.M.updateTextFields();
  //   }, []);
  const changeHandlerSingIn = (event: any) => {
    setFormSingIn({
      ...formSingIn,
      [event.target.name]: event.target.value
    });
  };
  const singInFormPost = () => {
    console.log(formSingIn);
    dispatch(singInFormLoad(formSingIn));

    history.push(`/`);
  };

  return (
    // <div>edewwe</div>
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
                className="btn yellow darken-4 waves-effect waves-light"
                onClick={singInFormPost}
              >
                Fertig
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const SingInForm = connect(mapStateToProps)(SingInFormCom);
