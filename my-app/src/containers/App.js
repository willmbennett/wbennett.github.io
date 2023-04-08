import React from "react";
import { Routes } from "react-router-dom";
import Navbar from "./Navbar";

const App = () => (
  <div className="nav">
    <Routes>
      <Navbar />
    </Routes>
  </div>
);

export default App;