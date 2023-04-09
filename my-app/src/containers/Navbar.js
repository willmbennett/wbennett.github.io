import React from "react";
import '../stylesheets/navbar.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="topnav">
      <div class="row">
        <div class="column topnav-left">
          <Link to="blog" class="nav-option" >Blog</Link>      
        </div>
        <div class="column topnav-center">
          <Link to="/" class="nav-option" >William Bennett</Link>
        </div>
        <div class="column topnav-right">
          <Link to="https://www.linkedin.com/in/willmbennett" class="nav-option fa fa-linkedin" ></Link>
          <Link to="https://github.com/willmbennett" class="nav-option fa fa-github" ></Link>
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;