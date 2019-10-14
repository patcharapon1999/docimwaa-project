import React, { Component } from "react";
import { Jumbotron, Row, Col, Card } from "react-bootstrap";
import MapAPI from "./MapAPI";
export default class ForwardGuideline extends Component {
  
  render() {
    return (
      <div>
        <Jumbotron className="jumbotron-option">
          <div className="header-forGuide">
            <h1 className="header-name">Forwarding Guidelines</h1>
          </div>
        </Jumbotron>
        <div id="grad-line"></div>

        
        <div style={{ margin: "50px" }}>
          <MapAPI
            google={this.props.google}
            center={{ lat: 13.736717, lng: 100.523186 }}
            height="300px"
            zoom={15}
          />

        </div>
      </div>
    );
  }
}
