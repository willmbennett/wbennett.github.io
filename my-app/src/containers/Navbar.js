import React from "react";
import '../stylesheets/navbar.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="topnav">
      <div className="row">
        <div className="column topnav-left">
          <Link to="blog" className="nav-option" >Blog</Link>      
        </div>
        <div className="column topnav-center">
          <Link to="/" className="nav-option" >William Bennett</Link>
        </div>
        <div className="column topnav-right">
          <Link to="https://www.linkedin.com/in/willmbennett" className="nav-option fa fa-linkedin" ></Link>
          <Link to="https://github.com/willmbennett" className="nav-option fa fa-github" ></Link>
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;