import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContexts } from '../api/UserContext';

const Protected = ({
    redirectPath = "/",
    children
}) => {
    const { user } = useContext(UserContexts)
    if (user) {
        return <Navigate to={redirectPath} replace />;
    }
    return children ? children : <Outlet />
}

export default Protected