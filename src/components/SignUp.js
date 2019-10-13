import React, { Component } from "react";
import { Button, Jumbotron, Container, Row, Col, Card } from "react-bootstrap";

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="jumbotron-option">
          <div className="header-option">
            <h1 className="header-name">Sigup</h1>
          </div>
        </Jumbotron>

        <div id="grad-line"></div>
      </div>
    );
  }
}
