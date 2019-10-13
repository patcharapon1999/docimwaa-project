import React, { Component } from "react";
import "../styles/Optional.css";
import { Button, Jumbotron, Container, Row, Col, Card } from "react-bootstrap";
import logo1 from "../assets/images/magnifying-glass.png";
import logo2 from "../assets/images/ambulance.png";
import logo3 from "../assets/images/doctor-suitcase.png";


export default class Optional extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="jumbotron-option">
          <div className="header-option">
            <h1 className="header-name">Optional</h1>
          </div>
        </Jumbotron>

        <div id="grad-line"></div>

        <div className="option-content">
          <Row className="text-center">
            <Col xs={12} sm={3} className="card-center">
              <Card className="card-body" text="white">
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={logo1}
                    style={{ width: "30%" }}
                  />
                  <Card.Title className="card-tile-style">
                    Dark Card Title
                  </Card.Title>
                </Card.Body>
              </Card>
              <br />
            </Col>
            <Col xs={12} sm={3} className="card-center">
              <Card className="card-body" text="white">
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={logo1}
                    style={{ width: "30%" }}
                  />
                  <Card.Title className="card-tile-style">
                    Dark Card Title
                  </Card.Title>
                </Card.Body>
              </Card>
              <br />
            </Col>
            <Col xs={12} sm={3} className="card-center">
              <Card className="card-body" text="white">
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={logo2}
                    style={{ width: "30%" }}
                  />
                  <Card.Title className="card-tile-style">
                    Dark Card Title
                  </Card.Title>
                </Card.Body>
              </Card>
              <br />
            </Col>
            <Col xs={12} sm={3} className="card-center">
              <Card className="card-body" text="white">
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={logo3}
                    style={{ width: "30%" }}
                  />
                  <Card.Title className="card-tile-style">
                    Dark Card Title
                  </Card.Title>
                </Card.Body>
              </Card>
              <br />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
