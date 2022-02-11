import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../components/Auth/Login";
import LoginLayoutRoute from "./LoginLayoutRoutes";
import BasicLayout from "../layout/BasicLayout";
import LoginLayout from "../layout/LoginLayout";
import LoginRoutes from "./LoginRoutes";
import SimpleRoutes from "./SimpleRoutes";
import Dashboard from "../pages/Dashboard/Dashboard";

const BasicRoutes = () => {
  return (
    <>
      <Switch>
        <SimpleRoutes
          exact
          path="/"
          component={Dashboard}
          layout={BasicLayout}
        />
        <LoginRoutes
          exact
          path="/login"
          component={Login}
          layout={LoginLayout}
        />
      </Switch>
    </>
  );
};

export default BasicRoutes;
