import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment/moment";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Marquee from "react-fast-marquee";
const Header = () => {
  return (
    <div className="container ">
      <div className="text-center">
        <img src={logo} alt="" />
        <p>
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY, ")}</p>
      </div>
      <div className="d-flex bg-light ">
        <Button variant="danger">Latest</Button>
        <Marquee>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Button variant="secondary">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
