import React from "react";
import './App.css';
import Navbar from "./layout/navbar";
import Bai1 from "./layout/bai1";
import Bai2 from "./layout/Bai2";
import Bai3 from "./layout/Bai3";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Routes>
          <Route path="bai1" element={<Bai1 />} />
          <Route path="bai2" element={<Bai2 />} />
          <Route path="bai3" element={<Bai3 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
