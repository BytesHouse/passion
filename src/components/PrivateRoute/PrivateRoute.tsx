// PrivateRoute.js
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: any) => {
    const { loading, user } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" />;
};



PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;