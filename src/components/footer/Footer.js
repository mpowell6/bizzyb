import React from "react";
import "./Footer.css";
import { Row, Col } from "react-bootstrap";

const footerInfo = require("../../resources/footer.json");

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
      <Row className="footerContact">
        <Col className="image">
          <img src="/resources/images/footer/logo.jpg" alt="logo" />
        </Col>
        <Col>
          <p>
            Bizzy B Plumbing <br />
            5845 Tallassee Rd. <br />
            Tallassee, TN 37878
          </p>
          <p>
            Serving Knoxville, Maryville, & surrounding areas <br />
            Financing Available!
          </p>
          <p>Phone: <a href="tel:865-591-8500">+1-865-591-8500</a></p>
          <p>
            Email: <a href="emailto:info@bizzybplumbing.com">info@bizzybplumbing.com</a>
          </p>
        </Col>
        <Col className="image">
          <img src="resources/images/footer/angiesListAward.jpg" alt="AngiesListAward" />
        </Col>
        <Col>
          <a href="https://twitter.com/BizzyBPlumbing">Follow @BizzyBPlumbing</a> <br />
          <a href="https://www.pinterest.com/bizzybplumbing/pins/">Follow us on Pintrest!</a> <br />
          <a href="https://www.zillow.com/profile/bizzybplumbing/?scrnnm=bizzybplumbing"><img src="resources/images/footer/featuredZillow.png" alt="zillow" /></a>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
