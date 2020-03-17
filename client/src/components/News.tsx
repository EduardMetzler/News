import React, { useEffect } from "react";
import { AppState } from "../store/model";
import { useHistory } from "react-router-dom";

import { connect, useDispatch } from "react-redux";
// import { isAuth, singInUser, noAuth } from "../store/user/user.actions";
import { Link } from "react-router-dom";
import { logOut, login, loginSuccess } from "../store/auth/auth.actions";
import { userLoad } from "../store/user/user.actions";

interface ConnectedState {
  // userDaten: Object | undefined;
  isAuthenticated: boolean;
}

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: state.auth.isAuthenticated

  //   isAuthenticated: state.auth.isAuthenticated

  // isAuthenticated: !!localStorage.getItem("token")
  // userDaten: state.user.userDaten
});

export const NewsComponent: React.FC<ConnectedState> = ({
  isAuthenticated
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  // useEffect(() => {
  //   if (isAuthenticated && ) {
  //     dispatch(userLoad());
  //   } else {
  //     // dispatch(userLoad(false));
  //   }
  // }, []);

  // console.log(isAuthenticated);
  //   const logOutFunction = () => {
  //     localStorage.removeItem("token");
  //     localStorage.removeItem("userId");

  //     history.push(`/`);

  //     dispatch(logOut());
  //   };
  return <div>news +</div>;
};

export const News = connect(mapStateToProps)(NewsComponent);
