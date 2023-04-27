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

const NewsLayout = () => {
  return (
    <div className="my-5">
      <Header></Header>

      <Container>
        <Row>
          
          <Col xs={9}>
            <Outlet></Outlet>
          </Col>
          <Col xs={3}>
            <RightNavBar></RightNavBar>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default NewsLayout;
