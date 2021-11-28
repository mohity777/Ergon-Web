import { Switch, Route, Redirect  } from "react-router-dom";
import React from "react";

import Login from "../components/Login";
import SignUp from "../components/SignUp";
import SignUpDetails from "../components/SignUpDetails";

const PublicRoutes = props => {
    return (
      <Switch>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/SignUp">
          <SignUp />
        </Route>
        <Route exact path="/SignUpDetails">
          <SignUpDetails />
        </Route>
        <Redirect to="/Login" />
      </Switch>
    );
}

export default PublicRoutes;