import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Blog from "../pages/Blog"

function App() {
  return (
    <div>
        <Navbar />
          <Routes>
            <Route path="/blog" element={<Blog />} />
            <Route path="/" element={<Home />} />
          </Routes>
    </div>
    
  );
}

export default App;