import React, { useState, useEffect, useMemo } from "react";
import { deleteToken, getToken, setToken } from "../Helpers/auth-helpers";
import Axios from "axios";
const UserContext = React.createContext();
const URI_WHOIAM = "http://157.245.242.243:3000/auth/whoiam/";
const URI_LOGIN = "http://157.245.242.243:3000/auth/sign-in";

export function UserProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    async function initial(){
      if(!getToken()){
        setAuth(false);
        return;
      }
      try {
        const {data} = await Axios.get(URI_WHOIAM);
        setAuth(true);
      } catch (error) {
        console.log(error);
        logOut();
      }

    }
    initial();
  }, [])

  function login(email, password) {
    Axios({
      url: URI_LOGIN,
      method: "POST",
      auth: {
        username: email,
        password,
      },
    }).then(({ data }) => {
      setAuth(true);
      setToken(data.token);
      console.log(getToken());
    }); 
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
