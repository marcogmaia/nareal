import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home";
import Book from "./components/book";

// const NewHome = Home();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/book" component={Book} />
        </Switch>
      </BrowserRouter> //wtf !???????
    );
  }
}

export default App;
