import React, { Component } from "react";
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
  MDBDropdownItem
} from "mdbreact";
import auth from "../firebase";
import Home from "./Home";

export default class navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapseID: "",
      loggedIn: "",
      showLogout: false,
      showSignUp: true,
      showLogIn: true
    };
  }

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
      <MDBNavbar expand="md" fixed="top">
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
                    { showLogIn 
                        ? <MDBDropdownItem onClick={(new Home().onOpenModal)}>Log In</MDBDropdownItem>
                        : null
                    }
                    { showSignUp 
                        ? <MDBDropdownItem href="/signUp">Sign Up</MDBDropdownItem>
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
