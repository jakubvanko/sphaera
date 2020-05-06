import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { URL_LOGIN } from "../../scripts/constants/urls";

const RouteLogin = ({ user, children, ...props }) => (
  <Route
    {...props}
    render={({ location }) => {
      return user._id ? (
        children
      ) : (
        <Redirect to={{ pathname: URL_LOGIN, state: { from: location } }} />
      );
    }}
  />
);

export default connect(({ user }) => ({ user: user.current }))(RouteLogin);
