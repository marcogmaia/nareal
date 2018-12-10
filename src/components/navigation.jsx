import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import { withRouter } from "react-router-dom";

import "./navigation.css";

// const someComponenet = withRouter(props => )

class Navigation extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     page: ["home", "book"]
  //   };
  // }

  render() {
    // console.log(this.props);
    return (
      <nav className="navbar navbar-light navcolor">
        <NavLink className="navbar-brand" to="/">
          <img className="logo" src={require(`../images/logo.png`)} alt="" />
        </NavLink>
      </nav> // ==========================
    );
  }
}
// <div className="logo">
//   <NavLink to="/">
//     <img className="logo" src={require(`../images/logo.png`)} alt="" />
//   </NavLink>
// </div>

export default Navigation;
