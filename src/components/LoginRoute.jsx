import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUser } from "../Context/user-context";

function LoginRoute({ children, ...rest }) {
  const { auth } = useUser();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          <Redirect
            to={{
              pathname: "/usuarios",
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}

export default LoginRoute;
