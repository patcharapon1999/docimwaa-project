import React, { Component } from "react";
import {
  Jumbotron,
  Row,
  Col,
  Card,
  Container,
  Form,
  Button
} from "react-bootstrap";
import MapAPI from "./MapAPI";
import "../styles/ForwardGuideline.css";

export default class ForwardGuideline extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="jumbotron-option">
          <div className="header-forGuide">
            <h1 className="header-name">Referral information</h1>
          </div>
        </Jumbotron>
        <div id="grad-line"></div>

        <Container>
          <Row>
            <Col sm={8}>
              <div style={{ margin: "50px" }}>
                <MapAPI
                  google={this.props.google}
                  center={{ lat: 13.736717, lng: 100.523186 }}
                  height="500px"
                  zoom={15}
                />
              </div>
            </Col>
            <Col sm={4}>
              <div style = {{margin: "50px 0 0 0"}}>
                <Form>
                  <div>
                    <h1>Referral information</h1>
                  </div>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Region</Form.Label>
                    <Form.Control as="select">
                      <option>Northern</option>
                      <option>Northeastern</option>
                      <option>Central</option>
                      <option>West</option>
                      <option>Eastern</option>
                      <option>Southern</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Hospital</Form.Label>
                    <Form.Control as="select">
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                      <option>D</option>
                      <option>E</option>
                      <option>S</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Doctor</Form.Label>
                    <Form.Control as="select">
                      <option>อ.นพ กัมปนาท วัง แสน</option>
                      <option>รศ.ดร.พญ.เนสินี ไชยเอีย</option>
                      <option>นพ.ภาณุมาศ ไกรสร</option>
                      <option>พญ.วริษา สุนทรวินิต </option>
                      <option>นพ.อดุลย์ บัณฑุกุล</option>
                      <option>พญ.อรพรรณ ชัยมณี</option>
                    </Form.Control>
                  </Form.Group>

                  <Container>
                    <Button
                      variant="primary"
                      type="submit"
                      style={{ width: "50%" }}
                    >
                      Search
                    </Button>
                  </Container>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
