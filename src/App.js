import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Scanning from "./components/Scanning";
import Optional from "./components/Optional";
import SearchByJob from "./components/SearchingByJob";
import ForwardGuideline from "./components/ForwardGuideline";
import About from "./components/About";
import FindingAgent from "./components/FindingAgent";
import FindingJob from "./components/FindingJob";
import AdminPage from "./components/AdminPage";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navb";
import test from "./components/mt";

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
              <Route path="/searchByJob" component={SearchByJob} />
              <Route path="/forwardGuideline" component={ForwardGuideline} />
              <Route path="/About" component={About} />
              <Route path="/FindingAgent" component={FindingAgent} />
              <Route path="/FindingJob" component={FindingJob} />
              <Route path="/AdminPage" component={AdminPage} />
              <Route path="/test" component={test} />
              <Route component={NoMatch} />
            </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
