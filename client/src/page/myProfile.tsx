import React from "react";
import { AppState } from "../store/model";
import { connect } from "react-redux";
import { MyDaten } from "../components/myDaten";
interface ConnectedState {
  lastName: string;
  firstName: string;
  isLoading: boolean;
  isValid: boolean;
}

const mapStateToProps = (state: AppState) => ({
  lastName: state.user.lastName,
  firstName: state.user.firstName,
  isLoading: state.auth.isLoading,
  isValid: state.auth.isValid

  //   isAdmin: state.user.isAdmin,
  //   content: state.admin.content,
  //   isAuthenticated: state.auth.isAuthenticated,
  //   token: state.auth.token,
  //   userListe: state.admin.userListe
});
export const MyProfileComponent: React.FC<ConnectedState> = ({
  lastName,
  firstName,
  isLoading,
  isValid
}) => {
  return (
    <>
      {lastName && firstName ? (
        <MyDaten
          lastName={lastName}
          firstName={firstName}
          isLoading={isLoading}
          isValid={isValid}
        ></MyDaten>
      ) : null}
    </>
  );
};

export const MyProfile = connect(mapStateToProps)(MyProfileComponent);
