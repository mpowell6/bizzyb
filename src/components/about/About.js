import React from "react";
import "./About.css";
import { Jumbotron } from "react-bootstrap";

const about = require("../../resources/about.json");

const About = () => {
  return (
    <Jumbotron className="aboutJumbotron">
      <div
        className="content"
        dangerouslySetInnerHTML={{
          __html: about.aboutInfo,
        }}
      ></div>
      <div className="imageContent">
        <img src={`/resources/images/site/shirtBack.jpg`} alt="Lance" />
      </div>
    </Jumbotron>
  );
};

export default About;
