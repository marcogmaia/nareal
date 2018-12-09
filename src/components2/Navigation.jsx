import React, { Component } from "react";
import {
  Alignment,
  AnchorButton,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider
} from "@blueprintjs/core";
// import { H5, Icon, Intent, Label, Slider } from "@blueprintjs/core";
// import { IconName } from "@blueprintjs/icons";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <Navbar className={Classes.DARK}>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>Blueprint Sandbox</NavbarHeading>
          <NavbarDivider />
          <AnchorButton
            href="http://blueprintjs.com/docs/v2/"
            text="Docs"
            target="_blank"
            minimal
            rightIcon="home"
          />
          <AnchorButton
            href="http://github.com/palantir/blueprint"
            text="Github"
            target="_blank"
            minimal
            rightIcon="code"
          />
        </NavbarGroup>
      </Navbar>
    );
  }
}

export default Navigation;
