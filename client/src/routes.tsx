import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { NewsPage } from "./page/news.page";
import { SignIn } from "./page/signIn.page";
import { AdminPage } from "./page/admin.page";

import { Registration } from "./page/registration.page";
import { AppState } from "./store/model";
import { connect } from "react-redux";
// import { AuthStore } from "./store/user/user.model";

interface ConnectedState {
  isAuthenticated: boolean;
  // userDaten: Object | undefined;
}

const mapStateToProps = (state: AppState) => ({
  // isAuthenticated: state.user.isAuthenticated,
  // isAuthenticated: !state.user.userDaten
  // userDaten: state.user.userDaten
});

export const useRoutes: React.FC<ConnectedState> = () => {
  // console.log(isAuthenticated);
  // if (isAuthenticated) {
  //   return (
  //     <Switch>
  //       <Route path="/" exact>
  //         <News></News>
  //       </Route>

  //       <Redirect to="/" />
  //     </Switch>
  //   );
  // }
  return (
    <Switch>
      <Route path="/" exact>
        <NewsPage></NewsPage>
      </Route>
      <Route path="/signIn" exact>
        <SignIn></SignIn>
      </Route>
      <Route path="/admin" exact>
        <AdminPage></AdminPage>
      </Route>

      <Route path="/registration" exact>
        <Registration></Registration>
      </Route>

      <Redirect to="/" />
    </Switch>
  );
};

// export const useRoutes = connect(mapStateToProps)(useRoutesComponent);
