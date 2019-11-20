import React, { Component } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Container,
  Card,
  Jumbotron
} from "react-bootstrap";
import "../styles/SignUp.css";
import auth from "../firebase";
import firebase from "firebase";
import config from "../firebase/config";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Fname: "",
      Lname: "",
      email: "",
      password: "",
      CFpasswoed: "",
      checkedA: "",
      currentUser: null
    };
  }
  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = async e => {
    e.preventDefault();

    const { email, password, CFpasswoed, Fname, Lname } = this.state;
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        auth.signInWithEmailAndPassword(email, password);
      })
      .catch(error => {
        console.log(error);
      });

    auth.onAuthStateChanged(function(user) {
      if (user) {
        var app;
        if (!firebase.apps.length) {
          app = firebase.initializeApp(config);
        }
        var db = firebase.firestore(app);
        var uid = user.uid;

        db.collection("users")
          .add({
            firstname: Fname,
            lastname: Lname,
            email,
            password,
            uid
          })
          .then(function() {
            console.log("Document successfully written!");
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          });
      } else {
      }
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <Jumbotron className="jumbotron-option">
          <div className="header-option">
            <h1 className="header-name">Sigup</h1>
          </div>
        </Jumbotron>

        <div id="grad-line"></div>
        <Container>
          <Card>
            <Form onSubmit={this.onSubmit}>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      name="Fname"
                      placeholder="First name"
                      onChange={this.onChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      name="Lname"
                      placeholder="Last name"
                      onChange={this.onChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="email"
                      placeholder="E-mail"
                      name="email"
                      onChange={this.onChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={this.onChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      name="cfPassword"
                      onChange={this.onChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="chkbx">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button className="signup-btn" type="submit">
                SUBMIT
              </Button>
            </Form>
          </Card>
        </Container>
      </div>
    );
  }
}
