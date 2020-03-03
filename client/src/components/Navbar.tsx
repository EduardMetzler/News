import React from "react";
import { AppState } from "../store/model";
import { useHistory } from "react-router-dom";

import { connect, useDispatch } from "react-redux";
import { isAuth, singInUser, noAuth } from "../store/user/user.actions";
import { Link } from "react-router-dom";

interface ConnectedState {
  isAuthenticated: boolean;
  // userDaten: Object | undefined;
}

const mapStateToProps = (state: AppState) => ({
  // isAuthenticated: state.user.isAuthenticated,
  isAuthenticated: !!localStorage.getItem("token"),
  userDaten: state.user.userDaten
});

export const NavbarComponent: React.FC<ConnectedState> = ({
  isAuthenticated
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  console.log(isAuthenticated);
  const logOut = () => {
    localStorage.removeItem("token");
    history.push(`/`);

    dispatch(isAuth(false));
  };
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            Logo
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            {/* <li>
              <a href="sass.html">Sass</a>
            </li> */}
            {/* <li onClick={() => dispatch(isAuth())}> */}
            <li>
              {!isAuthenticated ? <Link to="signIn">Anmelden </Link> : null}
            </li>
            {/* <li onClick={() => dispatch(isAuth())}> */}
            <li>
              {isAuthenticated ? <div onClick={logOut}>Abmelden </div> : null}
            </li>
            <li>
              {!isAuthenticated ? (
                <Link to="registration">Registrieren</Link>
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
