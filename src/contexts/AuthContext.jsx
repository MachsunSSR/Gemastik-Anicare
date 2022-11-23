import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("token") || false)
    

    const setLogin = (index, role) => {
        setIsAuthenticated(true)
        localStorage.setItem("token", JSON.stringify(index));
        localStorage.setItem("role", JSON.stringify(role));
    }

    const setLogout = () => {
        setIsAuthenticated(false)
        localStorage.removeItem("token");
        localStorage.removeItem("role");
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, setLogin, setLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext