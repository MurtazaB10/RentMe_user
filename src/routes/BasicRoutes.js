import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../components/Auth/Login";
import LoginLayoutRoute from "./LoginLayoutRoutes";
import BasicLayout from "../layout/BasicLayout";
import LoginLayout from "../layout/LoginLayout";
import LoginRoutes from "./LoginRoutes";
import SimpleRoutes from "./SimpleRoutes";
import Signup from "../components/Auth/Signup";
import Dashboard from "../pages/Dashboard/Dashboard";

const BasicRoutes = () => {
  return (
    <>
      <Switch>
        <SimpleRoutes path="/" component={Dashboard} layout={BasicLayout} />
        <LoginRoutes path="/Login" component={Login} layout={LoginLayout} />
        <LoginRoutes path="/signup" component={Signup} layout={LoginLayout} />
      </Switch>
    </>
  );
};

export default BasicRoutes;
