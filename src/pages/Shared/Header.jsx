import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import moment from "moment/moment";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
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
     
    </div>
  );
};

export default Header;
