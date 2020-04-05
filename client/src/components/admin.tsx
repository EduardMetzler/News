import React from "react";
import { AppState } from "../store/model";
import { UserListe } from "./userListe";
// import { useHistory } from "react-router-dom";

import { connect, useDispatch } from "react-redux";
// import { isAuth, singInUser, noAuth } from "../store/user/user.actions";
// import { Link } from "react-router-dom";
// import { logOut, login, loginSuccess } from "../store/auth/auth.actions";
// import { userLoad, admin } from "../store/user/user.actions";
import {
  allUsers,
  articleCreate,
  toArticleCreate,
  toAdvertisingCreate
} from "../store/anmin/admin.actions";
import { ArticleCreate } from "./ArticleCreate";
import { OneUserStore } from "../store/anmin/admin.model";
import { AdvertisingCreate } from "./AdvertisingCreate";

interface ConnectedState {
  isAdmin: boolean;
  content: string;
  userListe?: OneUserStore[];
}

const mapStateToProps = (state: AppState) => ({
  // isAdmin: state.user.isAdmin,
  // content: state.admin.content
});

export const AdminComponent: React.FC<ConnectedState> = ({
  content,
  isAdmin,
  userListe
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ padding: "20px" }}>
        <button
          style={{ marginLeft: "20px" }}
          className="waves-effect waves-light btn"
          onClick={() => dispatch(allUsers())}
        >
          Alle Benutzer
        </button>
        <button
          style={{ marginLeft: "20px" }}
          className="waves-effect waves-light btn"
          onClick={() => dispatch(toArticleCreate())}
        >
          Neue Beitrag
        </button>
        <button
          style={{ marginLeft: "20px" }}
          className="waves-effect waves-light btn"
          onClick={() => dispatch(toAdvertisingCreate())}
        >
          Neue Werbung
        </button>
      </div>
      {content === "ALL_USERD" ? <UserListe userListe={userListe} /> : null}
      {content === "TO_ARTICLE_CREATE" ? <ArticleCreate /> : null}
      {content === "TO_ADVERTISING_CREATE" ? <AdvertisingCreate /> : null}
    </>
  );
};

export const Admin = connect(mapStateToProps)(AdminComponent);
