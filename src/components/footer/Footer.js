import React from "react";
import "./Footer.css";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="grid-row">
      <footer>
        <Row className="footer-row">
          <Col xs={4} md={3} className="col">
            <h6>Knoxville Home Improvement</h6>
            <p>
              Making your home beautiful is our specialty. We can handle
              anything from small face-lift jobs, to major renovations. Just
              give us a call for an estimate!
            </p>
          </Col>
          <Col xs={4} md={3} className="col">
            <h6>Knoxville Home Remodeling</h6>
            <p>
              Looking to add-on to your home? Let us come by to take a look and
              assist you in coming up with a game-plan to make your dream a
              reality. If you can imagine it, we can build it!
            </p>
          </Col>
          <Col xs={4} md={3} className="col">
            <h6>Your #1 Knoxville Plumbing Contractors</h6>
            <p>
              Give us the opportunity to bring your vision to life. Our team has
              been plumbing and remodeling for years, and you won't find a more
              experienced crew anywhere else in Tennessee.
            </p>
          </Col>
          <Col xs={4} md={3} className="col">
            <h6>Knoxville Plumbing Services</h6>
            <p>
              Nobody likes dealing with plumbing issues, so let us fix them
              before they happen. We can do new installations, upgrades or even
              quick patchwork.
            </p>
          </Col>
        </Row>
      </footer>
    </div>
  );
};

export default Footer;
