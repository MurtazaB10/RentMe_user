import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../components/Auth/Login";
import LoginLayoutRoute from "./LoginLayoutRoutes";
import BasicLayout from "../layout/BasicLayout";
import LoginLayout from "../layout/LoginLayout";
import LoginRoutes from "./LoginRoutes";
import SimpleRoutes from "./SimpleRoutes";
import Dashboard from "../pages/Dashboard/Dashboard";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Profile from "../pages/Profile/Profile";
import Cart from "../pages/Cart/Cart";
import OnlyHeaderLayout from "../layout/OnlyHeaderLayout";

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
        <SimpleRoutes
          exact
          path="/cart"
          component={Cart}
          layout={OnlyHeaderLayout}
        />
        <SimpleRoutes
          exact
          path="/contact"
          component={Contact}
          layout={BasicLayout}
        />
        <SimpleRoutes
          exact
          path="/about"
          component={About}
          layout={BasicLayout}
        />
        <LoginRoutes
          exact
          path="/login"
          component={Login}
          layout={LoginLayout}
        />
        <LoginLayoutRoute
          exact
          path="/profile"
          component={Profile}
          layout={BasicLayout}
        />
      </Switch>
    </>
  );
};

export default BasicRoutes;
