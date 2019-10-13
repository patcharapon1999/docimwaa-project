import React, { Component } from "react";
import { Button, Jumbotron, Container, Collapse, Col } from "react-bootstrap";
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
              <p className="qsl">scanning question</p>
              <p className="qsl">scanning question</p>
              <p className="qsl">scanning question</p>
              <p className="qsl">scanning question</p>
              <p className="qsl">scanning question</p>
            </div>
            <div class="columnR">
              <p className="qsr">scanning question</p>
              <p className="qsr">scanning question</p>
              <p className="qsr">scanning question</p>
              <p className="qsr">scanning question</p>
              <p className="qsr">scanning question</p>
            </div>
           </div>
        <Col xs={12} sm={3} className="btn-div">
            <div>
              <Link to="/optional">
                <Button className="submit-btn" type="submit">
                  Submit
                </Button>
              </Link>
            </div>
        </Col>
          
      </div>
    );
  }
}
