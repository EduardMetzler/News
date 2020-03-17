import React from "react";
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
import { articleCreate } from "../store/anmin/admin.actions";

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(1, "min 1 zeichen")
    .max(100, "max 100")
    .required("darf nich leersein"),
  text: Yup.string()
    // .email("hier muss email sein")
    .min(1, "min 1 zeichen")
    .max(100000, "max 100000")
    .required("darf nich leersein")
});

interface ConnectedState {
  isAdmin: boolean;
  content: string;
  article?: Article;
  //   userListe?: OneUserStore[];
}

const mapStateToProps = (state: AppState) => ({
  isAdmin: state.user.isAdmin,
  content: state.admin.content,
  userListe: state.admin.userListe
});

export const ArticleCreateComponent: React.FC<ConnectedState> = ({}) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ title: "", text: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        dispatch(articleCreate(values));
        setSubmitting(true);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
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
              <label htmlFor="title">Title</label>
              <input
                className="input-field "
                type="text"
                name="title"
                id="title"
                placeholder="Überschrift eingeben"
                onChange={handleChange}
                value={values.title}
                onBlur={handleBlur}
                //   className={touched.name && errors.name ? "has-error" : null}
              />

              <ErrorComponent touched={touched.title} message={errors.title} />
            </div>
            <div className="">
              <label htmlFor="text">Text</label>
              <textarea
                className="materialize-textarea"
                // type="text"
                name="text"
                id="text"
                placeholder="Text eingeben"
                onChange={handleChange}
                value={values.text}
                onBlur={handleBlur}
                //   className={touched.email && errors.email ? "has-error" : null}
              />
              <ErrorComponent touched={touched.text} message={errors.text} />
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

export const ArticleCreate = connect(mapStateToProps)(ArticleCreateComponent);

// import React from "react";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import { Error } from "./Error";

// const validationSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(6, "min 6 zeichen")
//     .max(66, "max 66")
//     .required("darf nich leersein"),
//   email: Yup.string()
//     .email("hier muss email sein")
//     .max(66, "max 66")
//     .required("bitte email")
// });

// export default function FormikForm() {
//   return (
//     <Formik
//       initialValues={{ name: "", email: "" }}
//       validationSchema={validationSchema}
//       onSubmit={(values, { setSubmitting, resetForm }) => {
//         setSubmitting(true);
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           resetForm();
//           setSubmitting(false);
//         }, 500);
//       }}
//     >
//       {/* https://www.youtube.com/watch?v=TxEVnaISj1w&t=305s */}
//       {({
//         values,
//         errors,
//         touched,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         isSubmitting
//       }) => (
//         <form onSubmit={handleSubmit}>
//           {JSON.stringify(values)}
//           <div className="input-row">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               placeholder="name eingeben"
//               onChange={handleChange}
//               value={values.name}
//               onBlur={handleBlur}
//               className={touched.name && errors.name ? "has-error" : null}
//             />

//             <Error touched={touched.name} message={errors.name} />
//           </div>
//           <div className="input-row">
//             <label htmlFor="email">Name</label>
//             <input
//               type="text"
//               name="email"
//               id="email"
//               placeholder="email eingeben"
//               onChange={handleChange}
//               value={values.email}
//               onBlur={handleBlur}
//               className={touched.email && errors.email ? "has-error" : null}
//             />
//             <Error touched={touched.email} message={errors.email} />
//           </div>
//           <div>
//             <button type="submit" disabled={isSubmitting}>
//               submit
//             </button>
//           </div>
//         </form>
//       )}
//     </Formik>
//   );
// }
