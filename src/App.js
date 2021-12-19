import "./components/Dashboard/Dashboard.css";

import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./utils/constants";
import Layout from "./components/Layout";
import { useEffect } from "react";
import { getUser } from "./store/actions/userActions";

const PublicRoute = ({ isLoggedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn) return <Redirect to="/Dashboard" />;
        else return <Component {...props} />;
      }}
    />
  );
};

const PrivateRoute = ({ isLoggedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn) return <Component {...props} />;
        else return <Redirect to="/Login" />;
      }}
    />
  );
};

function App(props) {
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(token) dispatch(getUser());
  },[])

  return (
    <Switch>
      <Route
        path="/"
        exact={true}
        render={() => <Redirect to={"/Dashboard"} />}
      />
      {PUBLIC_ROUTES.map((route) => (
        <PublicRoute key={route.path} {...route} isLoggedIn={token} />
      ))}
      {PRIVATE_ROUTES.withoutLayout.map((route) => (
        <PrivateRoute key={route.path} {...route} isLoggedIn={token} />
      ))}
      <Layout {...props}>
        {PRIVATE_ROUTES.withLayout.map((route) => (
          <PrivateRoute key={route.path} {...route} isLoggedIn={token} />
        ))}
      </Layout>
    </Switch>
  );
}

export default App;
