import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Blog from "../pages/Blog"
import '../stylesheets/App.css'
import Calendly from "../components/Calendly";

function App() {
  return (
    <div>
        <Navbar />
        <div className="page">
          <Routes>
            <Route path="/blog" element={<Blog />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Calendly />
        </div>
    </div>
    
  );
}

export default App;