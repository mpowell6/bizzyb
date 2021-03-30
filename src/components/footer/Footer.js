import React from "react";
import "./Footer.css";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <Row>
          <Col>
            <p>Some footer nonsense.</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
