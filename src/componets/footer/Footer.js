import { Button, Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "./Footer.css";

function Footer() {
  return (
    <div
      style={{ backgroundColor: "rgba(12, 94, 80, 0.75)" }}
      className="ftr container"
    >
      <Row>
        <Col>
          <Button variant="secondary">
            <i className="fa-brands fa-instagram"></i>
          </Button>
        </Col>
        <Col>
          <Button variant="secondary">
            <i className="fa-brands fa-facebook"></i>
          </Button>
        </Col>
        <Col>
          <Button variant="secondary">
            <i className="fa-brands fa-twitter"></i>
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
