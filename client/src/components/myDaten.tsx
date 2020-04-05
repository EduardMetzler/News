import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  noVormValidation,
  isVormValidation,
  newPasswordText
} from "../store/auth/auth.actions";
interface ConnectedState {
  lastName: string;
  firstName: string;
  isLoading: boolean;
  isValid: boolean;
}
export const MyDaten: React.FC<ConnectedState> = ({
  lastName,
  firstName,
  isLoading,
  isValid
}) => {
  const [newPassword, setNewPassword] = useState({ password: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    if (newPassword.password.length < 6) {
      dispatch(noVormValidation());
    } else {
      dispatch(isVormValidation());
    }
  });
  const changeHandlerNewPassword = (event: any) => {
    setNewPassword({
      ...newPassword,
      [event.target.name]: event.target.value
    });
  };
  const newPasswordSend = (event: any) => {
    event.preventDefault();
    console.log(newPassword.password);
    dispatch(newPasswordText(newPassword.password));
  };

  return (
    <div className="row">
      <div className="col s8 offset-s2">
        <div className="section">
          <h3>Meine Daten</h3>
          <h5>VorName: {firstName}</h5>

          <h5>Name: {lastName}</h5>
          <div className="divider"></div>
          <h3>Passwort ändern</h3>
          <form onSubmit={newPasswordSend}>
            <label htmlFor="newPassword">Neue Passwort</label>
            <input
              value={newPassword.password}
              name="password"
              type="text"
              placeholder="Neue passwort eingeben"
              onChange={changeHandlerNewPassword}
            />
            <button
              disabled={isLoading || !isValid}
              className="btn yellow darken-4 waves-effect waves-light"
              type="submit"
            >
              Senden
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
