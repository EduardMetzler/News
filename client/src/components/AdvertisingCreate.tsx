// import React from "react";
// interface ConnectedState {}
// export const AdvertisingCreate: React.FC<ConnectedState> = () => {
//   return <div>test</div>;
// };

import React, { useEffect } from "react";
import { AppState } from "../store/model";
import "../App.css";
import "../index.css";

// import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { ErrorComponent } from "./Error";

import { connect, useDispatch } from "react-redux";
// import { isAuth, singInUser, noAuth } from "../store/user/user.actions";
// import { Link } from "react-router-dom";
// import { logOut, login, loginSuccess } from "../store/auth/auth.actions";
// import { userLoad, admin } from "../store/user/user.actions";
import { OneUserStore } from "../store/anmin/admin.model";
import { Article } from "../store/news/news.model";
import { articleCreate, advertisingCreat } from "../store/anmin/admin.actions";
import { useHistory } from "react-router-dom";

const validationSchema = Yup.object().shape({
  imageUrl: Yup.string().required("darf nich leersein"),
  url: Yup.string().required("darf nicht leer sein")
});

interface ConnectedState {
  // isAdmin: boolean;
  // content: string;
  // article?: Article;
  //   userListe?: OneUserStore[];
}

const mapStateToProps = (state: AppState) => ({
  // isAdmin: state.user.isAdmin,
  // content: state.admin.content,
  // userListe: state.admin.userListe
});

export const AdvertisingCreate: React.FC<ConnectedState> = ({}) => {
  const dispatch = useDispatch();
  // const history = useHistory();

  return (
    <Formik
      initialValues={{ imageUrl: "", url: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        dispatch(advertisingCreat(values));
        // history.push("/");
        setSubmitting(true);
        setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));
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
        <div className="row">
          <form className="input-row col s10 offset-s1" onSubmit={handleSubmit}>
            {/* {JSON.stringify(values)} */}
            <div>
              <label htmlFor="image">Bild URL</label>
              <input
                className="input-field "
                type="text"
                name="imageUrl"
                id="imageUrl"
                placeholder="URL eingeben"
                onChange={handleChange}
                value={values.imageUrl}
                onBlur={handleBlur}
                //   className={touched.name && errors.name ? "has-error" : null}
              />

              <ErrorComponent
                touched={touched.imageUrl}
                message={errors.imageUrl}
              />
            </div>
            <div className="">
              <label htmlFor="url">Link</label>
              <textarea
                className="materialize-textarea"
                // type="text"
                name="url"
                id="url"
                placeholder="URL eingeben"
                onChange={handleChange}
                value={values.url}
                onBlur={handleBlur}
                //   className={touched.email && errors.email ? "has-error" : null}
              />
              <ErrorComponent touched={touched.url} message={errors.url} />
            </div>
            <div>
              <button
                type="submit"
                className="btn yellow darken-4 waves-effect waves-light"
                disabled={isSubmitting}
              >
                submit
              </button>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

// export const ArticleCreate = connect(mapStateToProps)(ArticleCreateComponent);
