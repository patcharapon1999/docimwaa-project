import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavbarBrand, NavDropdown } from "react-bootstrap";
import { Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../components/navbar.css";
import userPic from "../assets/images/user.png";

export default class navbar extends Component {
  render() {
    return (
      <Navbar expand="lg">
        <Navbar.Brand href="./">DOCIMWAA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button className = "btnStyle">Search</Button>
          </Form>
          <img src = {userPic} className = "user-pic"></img>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
