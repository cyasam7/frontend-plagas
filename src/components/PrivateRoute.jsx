import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUser } from "../Context/user-context";

function PrivateRoute({ children, ...rest }) {
  const { auth, isCliente } = useUser();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: isCliente ? "/Cliente" : "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
