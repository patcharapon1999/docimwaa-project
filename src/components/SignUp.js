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
import AlertModal from "./AlertModal";

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
      currentUser: null,
      modalShow: false,
      errorMsg: ""
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
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == "auth/weak-password") {
          alert("The password is too weak.")
          // this.setState({modalShow: true});
          // this.setState({errorMsg: "The password is too weak."});
        } else {
          alert(errorMessage)
          // this.setState({modalShow: true});
          // this.setState({errorMsg: errorMessage});
        }
      });

    await auth
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
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
    document.location.href = "/";
  };

  render() {
    return (
      <div>
        <Jumbotron className="jumbotron-option">
          <div className="header-option">
            <h1 className="header-name-signup">Sign Up</h1>
          </div>
        </Jumbotron>

        <div className="grad-line"></div>
        <Container className="contained-card">
          <Card className="card-container">
            <Form onSubmit={this.onSubmit}>
              <Row>
                <Col>
                  <Form.Group>
                    {/* <label className="Fn-feild-label">First Name</label> */}
                    <Form.Control
                      className="Fn-feild"
                      type="text"
                      name="Fname"
                      placeholder="First Name*"
                      onChange={this.onChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    {/* <label className="Ln-feild-label">Last Name</label> */}
                    <Form.Control
                      className="Ln-feild"
                      type="text"
                      name="Lname"
                      placeholder="Last Name*"
                      onChange={this.onChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    {/* <label className="Em-feild-label">E-mail</label> */}
                    <Form.Control
                      className="Em-feild"
                      type="email"
                      placeholder="E-mail*"
                      name="email"
                      onChange={this.onChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    {/* <label className="Pw-feild-label">Password</label> */}
                    <Form.Control
                      className="Pw-feild"
                      type="password"
                      placeholder="Password*"
                      name="password"
                      onChange={this.onChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>  
                    {/* <label className="Cp-feild-label">Confirm Password</label> */}
                    <Form.Control
                      className="Cp-feild"
                      type="password"
                      placeholder="Confirm Password*"
                      name="cfPassword"
                      onChange={this.onChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* <Form.Group className="chkbx">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group> */}
              <Button className="signup-btn" type="submit">
                  SIGNUP
              </Button>
            </Form>
          </Card>
          {/* <AlertModal
            msg={this.errorMsg}
            header={"Error"}
            show={this.modalShow}
            onHide={() =>
              this.setState({
                modalShow: false
              })
            }
          /> */}
        </Container>
      </div>
    );
  }
}
