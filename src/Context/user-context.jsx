import React, { useState, useEffect, useMemo } from "react";
import { deleteToken, getToken, setToken } from "../Helpers/auth-helpers";
import Axios from "axios";
const UserContext = React.createContext();

export function UserProvider({ children }) {
    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState("");
    const [isCliente, setIsCliente] = useState(false);

    useEffect(() => {
        async function initial() {
            if (!getToken()) {
                setAuth(false);
                deleteToken();
                setLoading(false);
                return;
            }
            try {
                const { data } = await Axios.get("/auth/whoiam");
                setUser(data._id);
                if (data.tipo_usuario === "Cliente") {
                    setIsCliente(true);
                }
                setAuth(true);
            } catch (error) {
                deleteToken();
                setAuth(false);
            } finally {
                setLoading(false);
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
        if (data.user.tipo_usuario === "Tecnico") {
            throw new Error("No puede entrar");
        }
        setAuth(true);
        setUser(data.user.id);
        setToken(data.accessToken);
        if (data.tipo_usuario === "Cliente") {
            setIsCliente(true);
        }

        return data;
    }
    function logOut() {
        deleteToken();
        setAuth(false);
        setIsCliente(false);
        setUser("");
    }

    const value = useMemo(() => {
        return {
            login,
            logOut,
            auth,
            loading,
            user,
            isCliente,
        };
    }, [auth, loading, user, isCliente]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
export function useUser() {
    const context = React.useContext(UserContext);
    if (!context) {
        throw new Error("Tiene que estar dentro del contexto");
    }
    return context;
}
