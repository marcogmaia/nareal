import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div className="logo">
        <NavLink to="/">
          <img className="logo" src={require(`../images/logo.jpg`)} alt="" />
        </NavLink>
        {/* <NavLink to="/book">Book</NavLink> */}
      </div>
    );
  }
}

export default Navigation;
