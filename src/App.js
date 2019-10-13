import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Scanning from "./components/Scanning";
import Optional from "./components/Optional";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navb";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
            <Navbar/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signUp" component={SignUp} />
              <Route path="/scanning" component={Scanning} />
              <Route path="/optional" component={Optional} />
              <Route component={NoMatch} />
            </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
