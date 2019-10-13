import React, { Component } from "react";
import { Button, Jumbotron, Container, Collapse } from "react-bootstrap";
import "../styles/Scanning.css";
import { Link } from "react-router-dom";

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

        <div class="row">
          <div class="columnL">
            <h2>Column 1</h2>
            <p>Some text..</p>
          </div>
          <div class="columnR">
            <h2>Column 2</h2>
            <p>Some text..</p>
            <Link to="/optional">
              <Button className="login-btn" type="submit">
                Submit
              </Button>
            </Link>
          </div>
        </div>

      </div>
    );
  }
}
