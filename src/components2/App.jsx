import React, { Component } from "react";
import Navigation from "./Navigation";
import Home from "./Home";
import Landing from "./Landing";
import Footer from "./Footer";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navigation />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
