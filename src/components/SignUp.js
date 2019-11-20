import React, { Component } from "react";
import { Form, Button, Row, Col, Jumbotron } from "react-bootstrap";
import "../styles/SignUp.css";
import auth from "../firebase";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";

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
    const { name, value } = e.target
    this.setState({[name]: value})
  }

  onSubmit = async e => {
    e.preventDefault()

    const { email, password, CFpasswoed, Fname, Lname } = this.state
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        alert(response);
      })
      .catch(error => {
        console.log(error);
      })
    await auth
      .signInWithEmailAndPassword(email, password)
      
    await auth.onAuthStateChanged(function(user) {
      if (user) {
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        alert(displayName);
        alert(email);
        alert(emailVerified);
        alert(photoURL);
        alert(isAnonymous);
        alert(uid);
        alert(providerData);
      } else {

      }
    });
    alert("ok");
    this.props.history.push("/");
  }
 
  render() {
    // if (currentUser) {
    //   document.location.href = "/";
    // }
    const handleChange = name => event => {
      this.setState({ checkedA: event.target.checked });
    };
    const classes = makeStyles(theme => ({
      "@global": {
        body: {
          backgroundColor: theme.palette.common.white
        }
      },
      paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
      },
      form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3)
      },
      submit: {
        margin: theme.spacing(3, 0, 2)
      }
    }));
    return (
      <div>
        {/* <Jumbotron className="jumbotron-option">
          <div className="header-option">
            <h1 className="header-name">Sigup</h1>
          </div>
        </Jumbotron> */}

        <div id="grad-line"></div>

        {/* <Container component="main" maxWidth='sm'>
          <Card>
            <Container>
              <div className={classes.paper}>
                <form className={classes.form} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        onChange={this.handleSignUpButton}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox value="allowExtraEmails" color="primary" />
                        }
                        label="I want to receive inspiration, marketing promotions and updates via email."
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onSubmit={this.handleSignUpButton()}
                  >
                    Sign Up
                  </Button>
                  <Grid container justify="flex-end">
                    <Grid item>
                      <Link href="/" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Container>
          </Card>
        </Container> */}
        <Container>
          <Card>
            <Form onSubmit={this.onSubmit}>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="fname"
                      placeholder="First Name"
                      name="fname"
                      onChange={this.onChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="lname"
                      placeholder="Last Name"
                      name="lname"
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
                      type="cfPassword"
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
