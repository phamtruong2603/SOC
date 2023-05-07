import React from 'react';
import HeaderMain from '../../components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { ProjectManagementMain } from '../Admin/ProjectManagement/ProjectManagement';
import Project from '../../components/Project/Project';
import Profile from '../Admin/Profile/Profile';

const User = () => {
  return (
    <div style={{
      backgroundColor:"#f5f5f5",
        minHeight: "100vh"
      }}>
      <HeaderMain />
      <div style={{
        margin: "auto",
        width: "80%"
      }}>
        <Routes>
          <Route
            path="/"
            element={<ProjectManagementMain />}
          />
          <Route
            path="/:id"
            element={<Project />}
          />
          <Route
            path="/dashboard"
            element={<Profile />}
          />
        </Routes>
      </div>
    </div>
  )
}

export default User