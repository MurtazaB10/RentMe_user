import React from "react";
import { Route, Redirect } from "react-router-dom";

const LoginLayoutRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  const isLog = localStorage.getItem("refreshToken");
  return (
    <Route
      {...rest}
      render={(matchProps) =>
        isLog ? (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        ) : (
          <Redirect to="/Login" />
        )
      }
    />
  );
};

export default LoginLayoutRoute;
