import React, { useEffect } from "react";
import { AppState } from "../store/model";
import { useHistory } from "react-router-dom";

import { connect, useDispatch } from "react-redux";
// import { isAuth, singInUser, noAuth } from "../store/user/user.actions";
import { Link } from "react-router-dom";
import { logOut, login, loginSuccess } from "../store/auth/auth.actions";
import { userLoad, admin } from "../store/user/user.actions";

interface ConnectedState {}

const mapStateToProps = (state: AppState) => ({});

export const AdminComponent: React.FC<ConnectedState> = ({}) => {
  const dispatch = useDispatch();
  console.log("terrrrrrrrrrrrrrrrrrrrr");
  dispatch(admin());
  return (
    <>
      <div>Ich bin admin</div>
    </>
  );
};

export const Admin = connect(mapStateToProps)(AdminComponent);
