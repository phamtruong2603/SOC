import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProfileMain from '../../../components/Profile/ProfileMain';
import UpdateProfile from '../../../components/Profile/UpdateProfile';

const Profile = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<ProfileMain />}
            />
            <Route
                path="/update/:id"
                element={<UpdateProfile />}
            />
        </Routes>
    )
}

export default Profile