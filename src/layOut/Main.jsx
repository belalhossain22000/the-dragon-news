import React from "react";
import Header from "../pages/Shared/Header";
import Footer from "../pages/Shared/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftNavBar from "../pages/Shared/LeftNavBar";
import Home from "../pages/Home/Home";
import RightNavBar from "../pages/Shared/RightNavBar";

const Main = () => {
  return (
    <div>
      <Header></Header>

      <Container>
        <Row>
          <Col>
          <LeftNavBar></LeftNavBar>
          </Col>
          <Col xs={6}>
            <Home></Home>
            </Col>
          <Col>
          <RightNavBar></RightNavBar>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Main;
