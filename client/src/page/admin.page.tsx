import React, { useState } from "react";
import { Admin } from "../components/admin";
import { useDispatch, connect } from "react-redux";
import { admin } from "../store/user/user.actions";
import { AppState } from "../store/model";
import { useEffect } from "react";
import { OneUserStore } from "../store/anmin/admin.model";

interface ConnectedState {
  isAdmin: boolean;
  content: string;
  isAuthenticated: boolean;
  userListe?: OneUserStore[];

  // token: string | null;
}

const mapStateToProps = (state: AppState) => ({
  isAdmin: state.user.isAdmin,
  content: state.admin.content,
  isAuthenticated: state.auth.isAuthenticated,
  token: state.auth.token,
  userListe: state.admin.userListe
});

export const AdminPageComponent: React.FC<ConnectedState> = ({
  isAdmin,
  content,
  isAuthenticated,
  userListe
  // token
}) => {
  const [userListeLoad, setUserListeLoad] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userListeLoad) {
      dispatch(admin());
      setUserListeLoad(false);
    }
  });
  return (
    <>
      <div>
        {isAdmin ? (
          <Admin isAdmin={isAdmin} content={content} userListe={userListe} />
        ) : null}
      </div>
      {/* <div>{content == "" ? <Admin /> : null}</div> */}
    </>
  );
};
// {admin ? <Link to="admin">Admin </Link> : null}
export const AdminPage = connect(mapStateToProps)(AdminPageComponent);
