import React, { useEffect } from "react";
import { AppState } from "../store/model";
import { useHistory } from "react-router-dom";

import { connect, useDispatch } from "react-redux";
// import { isAuth, singInUser, noAuth } from "../store/user/user.actions";
import { Link } from "react-router-dom";
import { logOut, login, loginSuccess } from "../store/auth/auth.actions";
import { userLoad, userDelete } from "../store/user/user.actions";

interface ConnectedState {
  isAuthenticated: boolean;
  firstName: String;
  token: String;
  admin: boolean;
  // userDaten: Object | undefined;
}

const mapStateToProps = (state: AppState) => ({
  // isAuthenticated: true
  // isAuthenticated: !!localStorage.getItem("token")
  isAuthenticated: state.auth.isAuthenticated,
  firstName: state.user.firstName,
  admin: state.user.isAdmin
  // token: state.auth.token

  // userDaten: state.user.userDaten
});

export const NavbarComponent: React.FC<ConnectedState> = ({
  isAuthenticated,
  firstName,
  token,
  admin
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(loginSuccess());
      // history.push(`/`);
      console.log("token");
    }
  });
  // setTimeout(() => {
  // dispatch(userLoad());
  // }, 1000);
  useEffect(() => {
    console.log("test");
    // window.M.updateTextFields();
    if (isAuthenticated && !firstName) {
      dispatch(userLoad());
    }
  });
  // dispatch(userLoad());
  // dispatch(admin());

  console.log(isAuthenticated);
  const logOutFunction = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    // history.push(`/`);

    dispatch(logOut());
    dispatch(userDelete());
  };
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo" style={{ marginLeft: "20px" }}>
            News
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>{admin ? <Link to="admin">Admin </Link> : null}</li>
            <li>
              {!isAuthenticated ? <Link to="signIn">Anmelden </Link> : null}
            </li>
            {/* <li onClick={() => dispatch(isAuth())}> */}
            <li>
              {isAuthenticated ? (
                <Link onClick={logOutFunction} to="/">
                  Abmelden{" "}
                </Link>
              ) : null}
            </li>
            <li>
              {!isAuthenticated ? (
                <Link to="registration">Registrieren</Link>
              ) : null}
            </li>
            <li>
              {isAuthenticated && firstName ? (
                <div style={{ marginLeft: "30px", marginRight: "30px" }}>
                  <Link to="myProfile"> Hallo {firstName} ! </Link>
                  {/* Hallo {firstName} ! */}
                </div>
              ) : null}
            </li>
          </ul>
        </div>
      </nav>
      {/* <li className="sidenav" id="mobile-demo">
        <li>
          <a href="sass.html">Sass</a>
        </li>
        <li>
          <a href="badges.html">Components</a>
        </li>
        <li>
          <a href="collapsible.html">Javascript</a>
        </li>
        <li>
          <a href="mobile.html">Mobile</a>
        </li>
      </li> */}
    </>
  );
};

export const Nav = connect(mapStateToProps)(NavbarComponent);
