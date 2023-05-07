import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Protected = ({
    redirectPath = "/",
    children
}) => {
    const isLogin = true
    if (!isLogin) {
        return <Navigate to={redirectPath} replace />;
    }
    return children ? children : <Outlet />
}

export default Protected