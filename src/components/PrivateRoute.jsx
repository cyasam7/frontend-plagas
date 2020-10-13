import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUser } from "../Context/user-context";

function PrivateRoute({ children, ...rest }) {
  const { auth } = useUser();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
