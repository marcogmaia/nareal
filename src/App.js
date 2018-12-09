import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Book from "./components/book";
import Error from "./components/error";
import Navigation from "./components/Navigation";
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
            <Route path="/book/:id" component={Book} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
