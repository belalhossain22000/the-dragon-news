import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/">Home</Link>

            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {user && <FaUserCircle></FaUserCircle>}
            </Nav.Link>

            {user ? (
              <Button variant="secondary">Logout</Button>
            ) : (
              <Link to="/login">
                <Button variant="secondary">Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
