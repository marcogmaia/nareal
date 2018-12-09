import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./home";
import Book from "./book";
import Error from "./error";
import Navigation from "./navigation";
// const NewHome = Home();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Route component={Navigation} /> */}
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/book/:testval" component={Book} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
