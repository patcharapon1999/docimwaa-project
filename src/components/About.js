import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import aboutImg from "../assets/images/cigarette-asthma.jpg";

export default function About() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <p>
              Asthma occurs in 25 percent of adults with their work-related. In
              which the asthma agent due to work requires a history of exposure
              together with a history of asthma agent in the workplace, to be
              able to diagnose and lead to the correct management of patients.
            </p>
            <p>
              Medical graduates have no experience with the asthma agents,
              making it impossible to diagnose or do not know the asthma agents.
              Therefore they did not take the patient out of exposure.
            </p>
          </Col>
          <Col xs={6} md={4}>
            <div style={{ marginTop: "100px" }}>
              <Image src={aboutImg} className="img-fwd" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
