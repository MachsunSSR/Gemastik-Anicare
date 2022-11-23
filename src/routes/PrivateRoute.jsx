import { Navigate , Route } from "react-router-dom";
import AuthContext from '../contexts/AuthContext'
import Swal from 'sweetalert2'
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);
    const redirect = () => {
        Swal.fire({
            icon: 'error',
            title: 'Anda Belum Login',
            text: 'Silahkan login terlebih dahulu untuk melanjutkan!',
        })
        return <Navigate to="/login-peternak" />
    }
    return isAuthenticated? children: redirect()
};

export default PrivateRoute;