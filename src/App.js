import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/home";
import Book from "./components/book";
import Error from "./components/error";
import Navigation from "./components/navigation";
// const NewHome = Home();

const readerContext = React.createContext("isReader");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReader: false
    };
  }
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
