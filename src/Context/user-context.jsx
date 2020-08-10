import React, { useState, useEffect, useMemo } from "react";
import { deleteToken, getToken, setToken } from "../Helpers/auth-helpers";
import Axios from "axios";
const UserContext = React.createContext();
const URI_WHOIAM = "http://204.48.27.32:3000/auth/whoiam";
const URI_LOGIN = "http://204.48.27.32:3000/auth/sign-in";
export function UserProvider({children}) {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    async function initUser() {
      if (!getToken()) {
        setAuth(false);
        return;
      }
      try {
        const { data } = await Axios.get(URI_WHOIAM);
        console.log(data);
        setUser(data);
        setAuth(true);
      } catch (error) {}
    }
    initUser();
  },[]);
  function login(email, password) {
    Axios({
      url: URI_LOGIN,
      method: "POST",
      auth: {
        username: email,
        password,
      },
    }).then(({ data }) => {
      setUser(data.user.id);
      setAuth(true);
    });
  }
  function logOut() {
    deleteToken();
    setAuth(false);
  }

  const value = useMemo(() => {
    return {
      user,
      auth,
      login,
      logOut,
    };
  }, [user, auth]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
export function useUser(){
    const context = React.useContext(UserContext);
    if(!context){
        throw new Error("Tiene que estar dentro del contexto");
    }
    return context
}
