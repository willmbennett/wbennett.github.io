import React, { Component } from "react";
import {  Link } from "react-router-dom";
class Navbar extends Component {
  render(){
      return(
          <nav className="navbar navbar-expand">
              <div className="container-fluid">
                  <div className="navbar-header">
                      <Link to="/dogs" className="navbar-brand">
                          Dogs
                      </Link>
                  </div>
              </div>
          </nav>
      );
  }
}
export default Navbar;