import React from "react";
import "./Footer.css";
import { Row, Col } from "react-bootstrap";

const footerInfo = require('../../resources/footer.json');

const Footer = () => {
  return (
    <div className="main-footer">
        <Row className="footerContainer">
          <Col className="footerInfo">
            <h4>{footerInfo.homeImprovement}</h4>
            <p>{footerInfo.homeImpStatement}</p>
          </Col>
          <Col className="footerInfo">
            <h4>{footerInfo.homeRemodeling}</h4>
            <p>{footerInfo.remodelStatement}</p>
          </Col>
          <Col className="footerInfo">
            <h4>{footerInfo.knoxvilleContractors}</h4>
            <p>{footerInfo.knoxContractorsStatement}</p>
          </Col>
          <Col className="footerInfo">
            <h4>{footerInfo.knoxvillePlumbing}</h4>
            <p>{footerInfo.knoxPlumbingStatement}</p>
          </Col>
        </Row>
    </div>
  );
};

export default Footer;
