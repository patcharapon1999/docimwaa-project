import React, { Component } from "react";
import { Form, Button, Image } from "react-bootstrap";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import auth from '../firebase'

export default class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      message: '',
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({currentUser: user})
      }
    })
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState({[name]: value})
  }

  onSubmit = e => {
    e.preventDefault()

    const { email, password } = this.state
    auth
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        this.setState({
          currentUser: response.user
        })
      })
      .catch(error => {
        this.setState({
          message: error.message
        })
      })
  }

  logout = e => {
    e.preventDefault()
    auth.signOut().then(response => {
      this.setState({
        currentUser: null
      })
    })
  }

  render() {
    const { message, currentUser } = this.state

    if (currentUser) {
      return (
        <div>
          <p>Hello {currentUser.email}</p>
          <button onClick={this.logout}>Logout</button>
        </div>
      )
    }

    return (
      <div className="login-div">
        <Form onSubmit={this.onSubmit}>
          <Form.Group className="form-email">
            <h3 className="login-name">login to <b className="bold-name">DOCIMWAA</b><b className="hind-name">____</b></h3>
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.onChange}/>
          </Form.Group>

          <Form.Group>
            <Form.Control type="password" placeholder="Password" name="password" onChange={this.onChange}/>
            <Link to="/">
              <p className="fg-pw">Forgot password?</p>
            </Link>
          </Form.Group>
          {message ? <p className="help is-danger">{message}</p> : null}
          <Form.Group>
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <Button className="login-btn" type="submit">
            Login
          </Button>
        </Form>
      </div>
  
    );
  }
}
