import React from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import auth from '../firebase';

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


  render() {
    const { message, currentUser } = this.state
    const ColorLine = ({ color }) => (
      <hr style={{color: color, backgroundColor: color, height: 1}}/>
    );
    if (currentUser) {
      document.location.href = '/scanning'
      // return(
      //   <div>
      //     <p>Hello {currentUser.email}</p>
      //     <button onClick={this.logout}>Logout</button>
      //   </div>
      // )
    }

    return (
      <div className="login-div">
        <Form onSubmit={this.onSubmit}>
          <Form.Group className="form-email">
            <h3 className="login-name">login to <b className="bold-name">DOCIMWAA</b></h3>
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.onChange}/>
          </Form.Group>

          <Form.Group className="pw">
            <Form.Control type="password" placeholder="Password" name="password" onChange={this.onChange}/>
            <Link to="/">
              <p className="fg-pw">Forgot password?</p>
            </Link>
          </Form.Group>
          {message ? <p className="help is-danger">{message}</p> : null}
          <Form.Group className="chkbx">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          {/* not correct. do for check only */}
          {/* <Link to="/scanning"> */}
              <Button className="login-btn" type="submit">
                Login
              </Button>
          {/* </Link> */}
        </Form>
        <div className="reg-div">
          <ColorLine color="#D1D1D1" className="line"/>
          <p className="reg-txt">Don't have an account? Create an<label className="space">_</label>
            <Link to="/signUp" className="reg-link">
              DOCIMWAA
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

