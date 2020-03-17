import React from "react";
import { Admin } from "../components/admin";
import { useDispatch, connect } from "react-redux";
import { admin } from "../store/user/user.actions";
import { AppState } from "../store/model";
import { useEffect } from "react";

interface ConnectedState {
  isAdmin: boolean;
  content: string;
  isAuthenticated: boolean;
  // token: string | null;
}

const mapStateToProps = (state: AppState) => ({
  isAdmin: state.user.isAdmin,
  content: state.admin.content,
  isAuthenticated: state.auth.isAuthenticated,
  token: state.auth.token
});

export const AdminPageComponent: React.FC<ConnectedState> = ({
  isAdmin,
  content,
  isAuthenticated
  // token
}) => {
  const dispatch = useDispatch();
  // console.log("terrrrrrrrrrrrrrrrrrrrr");
  dispatch(admin());
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     // dispatch(admin());
  //     console.log("ddddddddddddddd");
  //   }
  // });
  // const k = content;
  return (
    <>
      <div>{isAdmin ? <Admin /> : null}</div>
      {/* <div>{content == "" ? <Admin /> : null}</div> */}
    </>
  );
};
// {admin ? <Link to="admin">Admin </Link> : null}
export const AdminPage = connect(mapStateToProps)(AdminPageComponent);
