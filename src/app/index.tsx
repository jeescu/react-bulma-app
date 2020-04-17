import React from 'react';
import Public from "app/layouts/PublicLayout"
import Dashboard from "app/layouts/DashboardLayout"
import NotFoundPage from "app/pages/NotFound";
import { Switch, Route, Router } from 'utils/router';
import { ProvideAuth } from 'utils/auth';
import 'app/styles.scss';

function App(props: any) {
  return (
    <ProvideAuth>
      <Router>

          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={Public} />
            <Route component={NotFoundPage} />
          </Switch>

      </Router>
    </ProvideAuth>
  );
}

export default App;