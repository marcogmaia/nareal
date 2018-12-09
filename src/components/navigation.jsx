import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

class Navigation extends Component {
  state = {
    page: ["home", "book"]
  };

  render() {
    this.renderButtons();
    return (
      <nav className="navbar navbar-light navcolor">
        <NavLink className="navbar-brand" to="/">
          <img className="logo" src={require(`../images/logo.png`)} alt="" />
        </NavLink>
      </nav> // ==========================
    );
  }

  renderButtons() {
    console.log("oie wtf");
  }
}
// <div className="logo">
//   <NavLink to="/">
//     <img className="logo" src={require(`../images/logo.png`)} alt="" />
//   </NavLink>
// </div>

export default Navigation;
