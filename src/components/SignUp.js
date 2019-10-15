import React, { Component } from "react";
import { Button, Jumbotron, Container, Row, Col, Card, Form } from "react-bootstrap";
import "../styles/SignUp.css";

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="jumbotron-option">
          <div className="header-option">
            <h1 className="header-name">Sigup</h1>
          </div>
        </Jumbotron>
        
        <div id="grad-line"></div>

        <Container className="form-signUp">
          <Card>
            <Container className="form-signUp-In">
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>First name</Form.Label>
                    <Form.Control placeholder="First name" />
                  </Form.Group>

                  <Form.Group className="Lname" as={Col} controlId="formGridPassword">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control placeholder="Last name" />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control type="password" placeholder="Confirm password" />
                </Form.Group>

                <Form.Group id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button className="btn" variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Container>
          </Card>
        </Container>
      </div>
    );
  }
}
