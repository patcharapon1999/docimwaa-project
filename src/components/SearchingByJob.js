import React, { Component } from "react";
import {Jumbotron, Row, Col, Card } from "react-bootstrap";
import ambulance from "../assets/images/ambulance.png";


export default class SearchingByJob extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="jumbotron-option">
          <div className="header-searchByJob">
            <h1 className="header-name">Search by job</h1>
          </div>
        </Jumbotron>

        <div id="grad-line"></div>
      </div>
    );
  }
}
