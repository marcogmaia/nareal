import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/home";
import Book from "./components/book";
import Error from "./components/error";
import Navigation from "./components/navigation";
// const NewHome = Home();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Route component={Navigation} /> */}
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/book" component={Book} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
