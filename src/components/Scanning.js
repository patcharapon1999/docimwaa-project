import React, { Component } from "react";
import { Button, Jumbotron, Container, Collapse } from "react-bootstrap";
import "../styles/Scanning.css";



export default class Scanning extends Component {

  render() {
    return (
      <div>
        <Jumbotron className="jumbotron-scanning">
          <div className="header-scanning">
            <h1 className="header-name">Scanning</h1>
          </div>
        </Jumbotron>

        <div id="grad-line"></div>
        
      </div>
    );
  }
}
