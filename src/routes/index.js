import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Protected from "./Protected.js";
import Admin from "../layout/Admin/index.js";

export default (
    <Routes>
        {/* <Route
            path="/"
            element={<Home />}
        /> */}
        {/* <Route
            path="/login"
            element={<Login />}
        /> */}
        <Route element={<Protected />}>
            <Route
                path="/admin"
                element={<Admin />}
            />
            {/* <Route
                path="/dashboard"
                element={< />}
            /> */}
        </Route>
    </Routes>
)