import React from "react";
import ServicesCarousel from "./ServicesCarousel";
import { Jumbotron, Container } from "react-bootstrap";
import logo from "./headerImg.jpg";
import "./Services.css";

const services = require("../../resources/services.json");

class Service extends React.Component {
  render() {
    return (
      <div className="Services">
        <Jumbotron fluid bsPrefix="headerJumbotron">
          <Container bsPrefix="headerContainer">
            <div className="HeaderArea">
              <p className="ServiceStatement col-md-4">
                {services.serviceStatement2}
              </p>
              <div className="servCarousel">
                <ServicesCarousel imgSources={services.servicesCarousel}/>
              </div>
            </div>
          </Container>
        </Jumbotron>
        <Jumbotron fluid bsPrefix="Jumbotron">
          <Container bsPrefix="plumbingContainer">
            <div className="plumbingBodyArea">
              <h3>{services.plumbingTitle}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: services.plumbingServices }}
              ></div>
            </div>
            <div className="imageArea">
              <img src={logo} alt="logo" className="col-md-8" />
            </div>
          </Container>
        </Jumbotron>
        <Jumbotron fluid bsPrefix="Jumbotron">
          <Container bsPrefix="electricContainer">
            <div className="electricBodyArea">
              <h3>{services.electricTitle}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: services.electricServices }}
              ></div>
              <div className="imageArea">
                <img src={logo} alt="logo" className="col-md-8" />
              </div>
            </div>
          </Container>
        </Jumbotron>
        <Jumbotron fluid bsPrefix="Jumbotron">
          <Container bsPrefix="homeContainer">
            <div className="homeBodyArea">
              <h3>{services.homeImprovementTitle}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: services.homeImprovementServices,
                }}
              ></div>
              <div className="imageArea">
                <img src={logo} alt="logo" className="col-md-8" />
              </div>
            </div>
          </Container>
        </Jumbotron>
        <Jumbotron fluid bsPrefix="contentJumbotron">
          <Container bsPrefix="bodyContainer">
            <div className="bodyArea">
              <p className="information col-6">{services.licenseStatement}</p>
              <img src={logo} alt="logo" className="col-md-8" />
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Service;
