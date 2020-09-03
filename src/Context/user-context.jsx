import React, { useState, useEffect, useMemo } from "react";
import { deleteToken, getToken, setToken } from "../Helpers/auth-helpers";
import Axios from "axios";
const UserContext = React.createContext();

export function UserProvider({ children }) {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    async function initial() {
      if (!getToken()) {
        setAuth(false);
        deleteToken();
        return;
      }
      try {
        await Axios.get("/auth/whoiam");
        setAuth(true);
      } catch (error) {
        deleteToken();
        setAuth(false);
      }
    }
    initial();
  }, []);

  async function login(email, password) {
    const { data } = await Axios({
      url: "/auth/sign-in",
      method: "POST",
      auth: {
        username: email,
        password,
      },
    });
    setAuth(true);
    setToken(data.token);
  }
  function logOut() {
    deleteToken();
    setAuth(false);
  }

  const value = useMemo(() => {
    return {
      login,
      logOut,
      auth,
    };
  }, [auth]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
export function useUser() {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("Tiene que estar dentro del contexto");
  }
  return context;
}
