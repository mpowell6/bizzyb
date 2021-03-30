import React from "react";
import "./About.css";
import { Jumbotron } from "react-bootstrap";

const about = require("../../resources/about.json");

const About = () => {
  return (
    <Jumbotron className="aboutJumbotron">
      <div
        dangerouslySetInnerHTML={{
          __html: about.aboutInfo,
        }}
      ></div>
      <img src={`/resources/images/site/shirtBack.jpg`} alt="Lance" />
    </Jumbotron>
  );
};

export default About;
