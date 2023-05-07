import React from "react";
import { Routes, Route } from "react-router-dom";
// import Protected from "./Protected.js";
import Home from "../layout/Login/index.js";
import Admin from "../layout/Admin/index.js";
import User from "../layout/User/index.js";

export default (
    <Routes>
        <Route
            path="/"
            element={<Home />}
        />
        {/* <Route element={<Protected />}> */}
        <Route
            path="/admin/*"
            element={<Admin />}
        />
        <Route
            path="/dashboard/*"
            element={<User />}
        />
        {/* </Route> */}
    </Routes>
)