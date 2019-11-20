import React, { Component } from "react";
import "../styles/Optional.css";
import { Jumbotron, Row, Col, Card, Container } from "react-bootstrap";
import logo1 from "../assets/images/magnifying-glass.png";
import logo2 from "../assets/images/ambulance.png";
import logo3 from "../assets/images/doctor-suitcase.png";
import { Link } from "react-router-dom";

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
          <div className="container-fluid">
            <Row className="text-center">
              <Col xs={12} sm={3} className="card-center">
                <Link to="/FindingJob" style={{ textDecoration: "none" }}>
                  <Card className="card-body zoom-op" text="white">
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        src={logo1}
                        style={{ width: "30%" }}
                      />
                      <Card.Text>
                        Find asthma agents by name
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
                <br />
              </Col>
              <Col xs={12} sm={3} className="card-center">
                <Link to="/FindingJob" style={{ textDecoration: "none" }}>
                  <Card className="card-body zoom-op" text="white">
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        src={logo1}
                        style={{ width: "30%" }}
                      />
                      <Card.Text>Find asthma agents by work</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
                <br />
              </Col>
              <Col xs={12} sm={3} className="card-center">
                <Link to="/ForwardGuideline" style={{ textDecoration: "none" }}>
                  <Card className="card-body zoom-op" text="white">
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        src={logo2}
                        style={{ width: "30%" }}
                      />
                      <Card.Text>
                        Referral information
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>

                <br />
              </Col>
              <Col xs={12} sm={3} className="card-center">
                <Card className="card-body zoom-op" text="white">
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={logo3}
                      style={{ width: "30%" }}
                    />
                    <Card.Text>
                      Treatment guidelines
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
