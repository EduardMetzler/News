import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import { registrationFormLoad } from "../store/user/user.actions";
import "../index.css";
import { AppState } from "../store/model";

interface ConnectedState {
  // articles?: Article[];
  // showAllNews?: boolean;
  // error: boolean;
  // isLoading: boolean;
}

const mapStateToProps = (state: AppState) => ({
  // articles: state.news.articles,
  // showAllNews: state.view.showAllNews,
  // error: state.view.error,
  // isLoading: state.view.isLoading
});

export const RegistrationFormComponent: React.FC = ({}) => {
  const [formRegister, setFormRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const dispatch = useDispatch();

  //   useEffect(() => {
  //     window.M.updateTextFields();
  //   }, []);
  const changeHandlerRegister = (event: any) => {
    setFormRegister({
      ...formRegister,
      [event.target.name]: event.target.value
    });
  };
  const registrationFormPost = () => {
    console.log(formRegister);
    dispatch(registrationFormLoad(formRegister));
  };

  return (
    <div style={{ paddingTop: "100px" }}>
      <div className="row center ">
        <div className="col s8 offset-s2 ">
          <div className="card blue-grey darken-1 ">
            <div className="card-content white-text ">
              <span className="card-title">Registrirung</span>
              <div className="input-field ">
                <input
                  placeholder="Vorname eingeben"
                  value={formRegister.firstName}
                  type="text"
                  name="firstName"
                  // className="yellow-input"
                  onChange={changeHandlerRegister}
                />
                <label className="active" htmlFor="firstName">
                  Vorname
                </label>
              </div>
              <div className="input-field ">
                <input
                  placeholder="Name eingeben"
                  value={formRegister.lastName}
                  type="text"
                  name="lastName"
                  // className="yellow-input"
                  onChange={changeHandlerRegister}
                />
                <label className="active" htmlFor="lastName">
                  Name
                </label>
              </div>
              <div className="input-field ">
                <input
                  placeholder="Email eingeben"
                  value={formRegister.email}
                  type="text"
                  name="email"
                  // className="yellow-input"
                  onChange={changeHandlerRegister}
                />
                <label className="active" htmlFor="email">
                  Email
                </label>
              </div>
              <div className="input-field ">
                <input
                  placeholder="Passwort eingeben"
                  value={formRegister.password}
                  type="password"
                  name="password"
                  // className="yellow-input"
                  onChange={changeHandlerRegister}
                />
                <label className="active" htmlFor="password">
                  Passwort
                </label>
              </div>
            </div>
            <div className="card-action">
              <button
                className="btn yellow darken-4 waves-effect waves-light"
                onClick={registrationFormPost}
              >
                Fertig
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RegistrationForm = connect(mapStateToProps)(
  RegistrationFormComponent
);
