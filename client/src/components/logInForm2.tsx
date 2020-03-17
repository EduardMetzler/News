import React, { useEffect, useState } from "react";
import { AppState } from "../store/model";
import { useHistory } from "react-router-dom";

import { connect, useDispatch } from "react-redux";
// import { isAuth, singInUser, noAuth } from "../store/user/user.actions";
// import { Link } from "react-router-dom";
import { login, loding, newSetError } from "../store/auth/auth.actions";
// import { userLoad, admin } from "../store/user/user.actions";

import { Formik } from "formik";
import * as Yup from "yup";
import "../App.css";

import { ErrorComponent } from "./Error";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "min 6 zeichen")
    .max(66, "max 66")
    .required("darf nich leersein"),
  email: Yup.string()
    .email("hier muss email sein")
    // .max(66, "max 66")
    .required("bitte email")
});

interface ConnectedState {
  isAuthenticated: boolean;
  isLoading: boolean;
  logInError: String;
  // email: string;
  // password: string;
}

interface MyFormValues {
  email: string;
  password: string;
}

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: !!localStorage.getItem("token"),
  isLoading: state.auth.isLoading,
  logInError: state.auth.logInError
});

export const LogInForm2Component: React.FC<ConnectedState> = ({
  isLoading,
  logInError,
  isAuthenticated
}) => {
  const [formSingIn, setFormSingIn] = useState({
    email: "",
    password: ""
  });
  const initialValues: MyFormValues = {
    password: formSingIn.password,
    email: formSingIn.password
  };
  const history = useHistory();

  const dispatch = useDispatch();
  useEffect(() => {
    setInterval(() => {});
  });
  // const handleChange2 = (event: any) => {
  //   setFormSingIn({
  //     ...formSingIn,
  //     [event.target.name]: event.target.value
  //   });
  // };
  useEffect(() => {});

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const formSingIn = {
          email: values.email,
          password: values.password
        };

        console.log(formSingIn);
        dispatch(login(formSingIn));
        dispatch(loding(true));
        dispatch(newSetError("", true));

        setSubmitting(true);
        setTimeout(() => {
          resetForm();
          setSubmitting(false);
        }, 500);
      }}
    >
      {/* https://www.youtube.com/watch?v=TxEVnaISj1w&t=305s */}
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="email eingeben"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              // className={touched.email && errors.email ? "has-error" : null}
            />
            <ErrorComponent touched={touched.email} message={errors.email} />
          </div>

          <div className="input-row">
            <label htmlFor="password">password</label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="password eingeben"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              // className={touched.name && errors.name ? "has-error" : null}
            />

            <ErrorComponent
              touched={touched.password}
              message={errors.password}
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={
                isSubmitting
                // errors.password === "min 6 zeichen" ||
                // errors.password === "max 66" ||
                // errors.password === "darf nich leersein" ||
                // !touched.password ||
                // errors.email === "hier muss email sein" ||
                // errors.email === "bitte email" ||
                // !touched.email
              }
            >
              submit
            </button>
            {isLoading ? <div>Anmeldung...</div> : null}
            {logInError ? <div>{logInError}</div> : null}
          </div>
        </form>
      )}
    </Formik>
  );
};
export const LogInForm2 = connect(mapStateToProps)(LogInForm2Component);
