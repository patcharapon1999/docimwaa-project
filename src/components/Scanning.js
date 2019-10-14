import React, { Component } from "react";
import {
  Button,
  Jumbotron,
  Container,
  Collapse,
  Col,
  Card,
  Form
} from "react-bootstrap";
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
        <Container>
          <div className="qs-div">
            <Form>
              <Card>
                <Form.Group>
                  <Form.Label>Worse at home</Form.Label><br></br>
                    <Form.Check
                      inline
                      type="radio"
                      label="Yes"
                      name="q1"
                      id="rad1-1"
                    />
                    <Form.Check
                    inline
                      type="radio"
                      label="No"
                      name="q1"
                      id="rad1-2"
                    />
                </Form.Group>
              </Card>

              <Card>
                <Form.Group>
                  <Form.Label>Better when away from home</Form.Label><br></br>
                    <Form.Check
                      inline
                      type="radio"
                      label="Yes"
                      name="q2"
                      id="rad2-1"
                    />
                    <Form.Check
                    inline
                      type="radio"
                      label="No"
                      name="q2"
                      id="rad2-1"
                    />
                </Form.Group>
              </Card>

              <Card>
                <Form.Group>
                  <Form.Label>Evidence of having known agent in the workplace</Form.Label><br></br>
                    <Form.Check
                      inline
                      type="radio"
                      label="Yes"
                      name="q3"
                      id="rad3-1"
                    />
                    <Form.Check
                    inline
                      type="radio"
                      label="No"
                      name="q3"
                      id="rad3-2"
                    />
                </Form.Group>
              </Card>

              <Card>
                <Form.Group>
                  <Form.Label>Evidence of having known agent in the workplace</Form.Label><br></br>
                    <Form.Check
                      inline
                      type="radio"
                      label="Yes"
                      name="q4"
                      id="rad4-1"
                    />
                    <Form.Check
                    inline
                      type="radio"
                      label="No"
                      name="q4"
                      id="rad4-2"
                    />
                </Form.Group>
              </Card>
            </Form>
          </div> 
    
          <div className="btn-div">
            <Link to="/optional">
              <Button className="submit-btn" type="submit">
                Submit
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }
}
