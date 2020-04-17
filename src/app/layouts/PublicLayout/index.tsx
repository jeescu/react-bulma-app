import React from "react";
import { Switch, Route } from "utils/router";
import Navbar from "app/components/Navbar";
import Footer from "app/components/Footer";
import HomePage from "app/pages/Home";
import SigninPage from "app/pages/SignIn";
import SignupPage from "app/pages/SignUp";

function PublicLayout({ match }: any) {
  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://bulma.io/images/bulma-logo.png"
      />

      <Switch>
        <Route exact path={match.url} component={HomePage} />
        <Route exact path={`${match.url}signin`} component={SigninPage} />
        <Route exact path={`${match.url}signup`} component={SignupPage} />
      </Switch>

      <Footer
        color="light"
        size="normal"
        logo="https://bulma.io/images/bulma-logo.png"
        copyright="© 2020 Bulma"
      />
    </>
  );
}

export default PublicLayout;
