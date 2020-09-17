import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUser } from "../Context/user-context";

function LoginRoute({ children, ...rest }) {
  const { auth, tipo } = useUser();
  console.log(tipo);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          tipo === "Cliente" ? (
            <Redirect
              to={{
                pathname: "/Cliente",
                state: { from: location },
              }}
            />
          ) : (
            <Redirect
              to={{
                pathname: "/usuarios",
                state: { from: location },
              }}
            />
          )
        ) : (
          children
        )
      }
    />
  );
}

export default LoginRoute;
