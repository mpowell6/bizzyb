import React from "react";
import "./About.css";

const about = require('../../resources/about.json');

const About = () => {
  return (
    <div>
      <h1>{about.intro1}</h1>
      <h3>{about.intro2}</h3>
      <h4>{about.qualityStatement}</h4>
      {about.qualityStatement2}
      {about.qualityStatement3}
      {about.qualityStatement4}
    </div>
  );
};

export default About;
