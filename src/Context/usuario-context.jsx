import React, {useState} from 'react'

const UsuarioContext = React.createContext();
function UserProvider({children}) {
    const [User, setUser] = useState({})
    const [Loading, setLoading] = useState(false);
    const [Error, setError] = useState(false);
    return (
        <UsuarioContext.Provider>
            {children}
        </UsuarioContext.Provider>
    )
}

export default UserProvider
