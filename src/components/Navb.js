import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  NavDropdown,
  Dropdown
} from "react-bootstrap";
import { Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import userPic from "../assets/images/user.png";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBContainer,
  MDBIcon
} from "mdbreact";
import auth from "../firebase";
import Home from "./Home";

export default class navbar extends Component {
  state = {
    collapseID: "",
    loggedIn: "",
    showLogout: false,
    showSignUp: true,
    showLogIn: true
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

    componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ showLogout: true })
        this.setState({ showSignUp: false })
        this.setState({ showLogIn: false })
      } else {
        this.setState({ showLogout: false })
        this.setState({ showSignUp: true })
        this.setState({ showLogIn: true })
      }
    });
  }

  logout = async e => {
    e.preventDefault();
    await auth.signOut().then(response => {
      this.setState({
        currentUser: null
      });
    });
    document.location.href = "/";
  };

  render() {
    const { showLogout } = this.state;
    const { showSignUp } = this.state;
    const { showLogIn } = this.state;
    
    // {this.isLoggedIn()}

    return (
      // <Navbar expand="lg" fixed="top">
      //   <Navbar.Brand href="./">DOCIMWAA</Navbar.Brand>
      //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //   <Navbar.Collapse id="basic-navbar-nav">
      //     <Nav className="mr-auto"></Nav>
      //     {/* <Form inline>
      //       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      //       <Button className="btnStyle">Search</Button>
      //     </Form> */}
      //     {/* <img src={userPic} className="user-pic" onClick={this.avatar}></img> */}
      //     <Nav.Link href="/login" className = "signIn-nav">Sign In</Nav.Link>
      //     <Nav.Link href="/signup" className = "signIn-nav">Sign Up</Nav.Link>
      //   </Navbar.Collapse>
      // </Navbar>
      <MDBNavbar expand="md">
        <MDBNavbarBrand>
          <MDBNavLink to="/">
          <strong className="navName">DOCIMWAA</strong>
          </MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">
                <span className="navItem">Home</span>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/about">
                <span className="navItem">About</span>
              </MDBNavLink>
            </MDBNavItem>

            {/* <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">MDBDropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    Something else here
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    Something else here
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem> */}
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle className="dopdown-toggle" nav>
                  <img
                    src={userPic}
                    className="rounded-circle z-depth-0"
                    style={{ height: "35px", padding: 0 }}
                    alt=""
                  />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  {/* <MDBDropdownItem href="#!">Log In</MDBDropdownItem> */}
                  {/* <MDBDropdownItem href="#!">Sign Up</MDBDropdownItem> */}
                  {/* <MDBDropdownItem onClick={this.logout}> */}
                    { showLogIn 
                          ? <MDBDropdownItem href="#!">Log In</MDBDropdownItem>
                          : null
                    }
                    { showSignUp 
                        ? <MDBDropdownItem href="#!">Sign Up</MDBDropdownItem>
                        : null
                    }
                    { showLogout 
                      ? <MDBDropdownItem onClick={this.logout}>Log out</MDBDropdownItem>
                      : null
                    }
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}
