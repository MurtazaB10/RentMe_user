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
import Productview from "../pages/Product/ProductCatalogue";
import ProductDetails from "../pages/Product/ProductDetails";
import Forget from "../pages/Forget_Password/Forget";
import Reset from "../pages/Forget_Password/Reset";
import Checkout from "../pages/Checkout/Checkout";
import History from "../pages/Order/History";
import Feedback from "../pages/Feedback/Feedback";
import Support from "../pages/Policies/Support";
import Success from "../pages/Checkout/CheckoutSuccess/Success";
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
        <LoginLayoutRoute
          exact
          path="/policies"
          component={Support}
          layout={BasicLayout}
        />
        <LoginLayoutRoute
          exact
          path="/success/:id"
          component={Success}
          layout={BasicLayout}
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
        <SimpleRoutes
          exact
          path="/forget"
          component={Forget}
          layout={LoginLayout}
        />
       <SimpleRoutes
          exact
          path="/reset/:token/:id"
          component={Reset}
          layout={LoginLayout}
        />
        <SimpleRoutes
          exact
          path="/feedback"
          component={Feedback}
          layout={LoginLayout}
        />
        <LoginLayoutRoute
          exact
          path="/product"
          component={Productview}
          layout={BasicLayout}
        />
        <LoginLayoutRoute
          exact
          path="/order"
          component={History}
          layout={BasicLayout}
        />
        <LoginLayoutRoute
          exact
          path="/cart"
          component={Cart}
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
          layout={OnlyHeaderLayout}
        />
        <LoginLayoutRoute
          exact
          path="/checkout"
          component={Checkout}
          layout={BasicLayout}
        />
        <LoginLayoutRoute
          exact
          path="/:id"
          component={ProductDetails}
          layout={BasicLayout}
        />
      </Switch>
    </>
  );
};

export default BasicRoutes;
