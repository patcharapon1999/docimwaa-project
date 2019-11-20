import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import aboutImg from "../assets/images/cigarette-asthma.jpg";
import aboutImg2 from "../assets/images/fwd.jpg";

export default function About() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <div style={{ marginTop: "100px" }}>
              <Image src={aboutImg} style={{ width: "100%" ,  boxShadow: "0px 6px 20px #9E9E9E"}} />
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div style={{ marginTop: "100px" }}>
              <h1>Motivation</h1>
              <p>
                &nbsp; &nbsp; &nbsp; &nbsp;Asthma occurs in 25 percent of adults
                with their work-related. In which the asthma agent due to work
                requires a history of exposure together with a history of asthma
                agent in the workplace, to be able to diagnose and lead to the
                correct management of patients.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4}>
            <div style={{ marginTop: "100px" }}>
              <h1>
                Treatment guidelines
              </h1>
              <p>
                &nbsp; &nbsp; &nbsp; &nbsp;Medical graduates have no experience
                with the asthma agents, making it impossible to diagnose or do
                not know the asthma agents. Therefore they did not take the
                patient out of exposure and this web application can help
                medical graduates to diagnose work-related asthma .
              </p>
            </div>
          </Col>
          <Col xs={12} md={8}>
            <div style={{ marginTop: "50px", marginBottom: "50px" }}>
              <Image src={aboutImg2} style={{ width: "100%" ,  boxShadow: "0px 6px 20px #9E9E9E"}} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
