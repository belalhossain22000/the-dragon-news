import React from "react";
import Header from "../pages/Shared/Header";
import Footer from "../pages/Shared/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftNavBar from "../pages/Shared/LeftNavBar";
import Home from "../pages/Home/Home";
import RightNavBar from "../pages/Shared/RightNavBar";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>

      <Container>
        <Row>
          <Col>
            <LeftNavBar></LeftNavBar>
          </Col>
          <Col xs={6}>
            <Outlet></Outlet>
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
