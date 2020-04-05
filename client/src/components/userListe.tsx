import React from "react";
import { AppState } from "../store/model";
// import { useHistory } from "react-router-dom";

import { connect, useDispatch } from "react-redux";
// import { isAuth, singInUser, noAuth } from "../store/user/user.actions";
// import { Link } from "react-router-dom";
// import { logOut, login, loginSuccess } from "../store/auth/auth.actions";
// import { userLoad, admin } from "../store/user/user.actions";
import { OneUserStore } from "../store/anmin/admin.model";
import { newAdmin } from "../store/anmin/admin.actions";

interface ConnectedState {
  // isAdmin: boolean;
  // content: string;
  userListe?: OneUserStore[];
}

const mapStateToProps = (state: AppState) => ({
  // isAdmin: state.user.isAdmin,
  // content: state.admin.content,
  // userListe: state.admin.userListe
});

export const UserListeComponent: React.FC<ConnectedState> = ({ userListe }) => {
  const dispatch = useDispatch();
  // if (userListe === []) {
  //   dispatch(admin());
  // }
  // console.log(userListe);

  return (
    <>
      {/* {userListe?.map(user => {
        return <table key={user._id}></table>;
      })} */}
      <table className="highlight centered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Vorname</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {userListe?.map(user => {
            return (
              <tr key={user._id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    // disabled={user.admin}
                    className="btn yellow darken-4 waves-effect waves-light"
                    onClick={() => dispatch(newAdmin(user._id))}
                  >
                    neue Admin
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      ;
    </>
  );
};

export const UserListe = connect(mapStateToProps)(UserListeComponent);

{
  /* <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Item Name</th>
      <th>Item Price</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Alvin</td>
      <td>Eclair</td>
      <td>$0.87</td>
    </tr>
    <tr>
      <td>Alan</td>
      <td>Jellybean</td>
      <td>$3.76</td>
    </tr>
    <tr>
      <td>Jonathan</td>
      <td>Lollipop</td>
      <td>$7.00</td>
    </tr>
  </tbody>
</table>; */
}
