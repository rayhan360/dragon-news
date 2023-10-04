/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className="flex justify-center items-center h-[80vh]">
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;