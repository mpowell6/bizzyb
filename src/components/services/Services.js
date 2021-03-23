import React from "react";
import ServiceCard from "./ServicesCard";
import ServicesCarousel from "./ServicesCarousel";
import { Jumbotron, Container } from "react-bootstrap";
import { FiTool, FiZap, FiHome } from "react-icons/fi";
import logo from "./headerImg.jpg";
import './Services.css';

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
                <ServicesCarousel />
              </div>
            </div>
          </Container>
        </Jumbotron>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <ServiceCard
                icon={FiTool}
                title={services.plumbingTitle}
                body={services.clickPlumbing}
                card={services.plumbingServices}
              />
            </div>
            <div className="col-md-4">
              <ServiceCard
                icon={FiZap}
                title={services.electricTitle}
                body={services.clickElectric}
                card={services.electricServices}
              />
            </div>
            <div className="col-md-4">
              <ServiceCard
                icon={FiHome}
                title={services.homeImprovementTitle}
                body={services.clickHomeImp}
                card={services.homeImprovementServices}
              />
            </div>
          </div>
        </div>
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
