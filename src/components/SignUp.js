import React, { Component } from "react";
import { Button, Jumbotron, Container, Row, Col, Card, Form } from "react-bootstrap";

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
        <Form>
          <Form.Row>
            <Form.Group>
              <Form.Label>First name</Form.Label>
              <Form.Control placeholder="First name" />
            </Form.Group>

            <Form.Group>
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

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
