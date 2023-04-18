import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
import Qzone from "./Qzone";

const RightNavBar = () => {
  return (
    <div>
      <h3>Login with</h3>

      <Button variant="outline-primary">
        {" "}
        <FaGoogle /> Login with Google
      </Button>
      <br />
      <Button variant="outline-primary">
        <FaGithub />
        Login with Github
      </Button>
      <div>
        <h3>Find us on</h3>
        <ListGroup>
          
          <ListGroup.Item><FaFacebook />Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram/>Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <div >
        <Qzone></Qzone>
      </div>
    </div>
  );
};

export default RightNavBar;
