import { MainScreen, SigninScreen } from "./components/screens";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { inject, observer } from "mobx-react";

import React from "react";

const PrivateRoute = props => {
  return (
    <Switch>
      <Route exact path="/" component={MainScreen} />
    </Switch>
  );
};
const PublicRoute = props => {
  return (
    <Switch>
      <Route exact path="/" component={SigninScreen} />
    </Switch>
  );
};

@inject("store")
@observer
class MainRouter extends React.Component {
  constructor(props) {
    super(props);
    this.isLoggedIn = this.props.store.isLoggedIn;
  }
  render() {
    return (
      <Router>
        {this.isLoggedIn ? (
          <PrivateRoute {...this.props} />
        ) : (
          <PublicRoute {...this.props} />
        )}
      </Router>
    );
  }
}

export default MainRouter;
