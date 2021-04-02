import React from "react";
import ServicesCarousel from "./ServicesCarousel";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import "./Services.css";

const services = require("../../resources/services.json");

class Service extends React.Component {
  render() {
    return (
      <div className="Services">
        <Jumbotron>
          <Container bsPrefix="headerContainer">
            <Row>
              <Col>
                <img src={"/resources/images/site/headerImg.jpg"} alt="logo" />
              </Col>
              <Col className="headerContent">
                <div className="HeaderArea">
                  <p className="ServiceStatement">
                    {services.serviceStatement2}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Jumbotron>
          <Container bsPrefix="plumbingContainer">
            <Row>
              <Col className="content">
                <h3>{services.plumbingTitle}</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: services.plumbingServices,
                  }}
                ></div>
              </Col>
              <Col className="imageArea">
                  <img
                    src={services.plumbingImg}
                    alt="plumbingImg"
                    className="col-md-8"
                  />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Jumbotron>
          <Container bsPrefix="electricContainer">
            <Row>
              <Col className="imageArea">
                  <img
                    src={services.electricImg}
                    alt="electricImg"
                    className="col-md-8"
                  />
              </Col>
              <Col className="content">
                <h3>{services.electricTitle}</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: services.electricServices,
                  }}
                ></div>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Jumbotron>
          <Container bsPrefix="homeContainer">
            <Row>
              <Col className="content">
                <h3>{services.homeImprovementTitle}</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: services.homeImprovementServices,
                  }}
                ></div>
              </Col>
              <Col className="imageArea">
                  <img
                    src={services.improvementImg}
                    alt="homeImproveImg"
                    className="col-md-8"
                  />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Jumbotron>
          <Container bsPrefix="bodyContainer">
            <div className="bodyArea">
              <p className="information">{services.licenseStatement}</p>
            </div>
            <div className="servCarousel">
              <ServicesCarousel imgSources={services.servicesCarousel} />
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Service;
