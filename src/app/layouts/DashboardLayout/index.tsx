import React from "react";
import { Switch, Route } from "utils/router";
import Navbar from "app/components/Navbar";
import Footer from "app/components/Footer";
import DashboardPage from "app/pages/Dashboard";

function DashboardLayout({ match }: any) {
  console.log(match.url);
  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://bulma.io/images/bulma-logo.png"
      />

      <Switch>
        <Route exact path={match.url} component={DashboardPage} />
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

export default DashboardLayout;
