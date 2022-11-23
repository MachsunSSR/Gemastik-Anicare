import React, {useContext} from "react";
import { Navigate } from "react-router-dom";
import AuthContext from '../contexts/AuthContext'


const PublicRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);
    const redirect = () => {
        //Check role
        const role = localStorage.getItem("role")
        console.log(role)
        if(role == '"dokter"'){
            return <Navigate to="/dokter" />
        }else if(role == '"user"'){
            return <Navigate to="/profile" />
        }else{
            return <Navigate to="/" />
        }
    }
    return isAuthenticated?  redirect() : children
};

export default PublicRoute;