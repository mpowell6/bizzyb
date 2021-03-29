import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./Contact.css";

const contact = require("../../resources/contact.json");

const Contact = () => {
  return (
    <div className="Contact">
      <Jumbotron fluid bsPrefix="headerJumbotron">
        <Container bsPrefix="headerContainer">
          <div className="headerArea">
            <div className="contactStatement col-md-8">
              {contact.travelStatement}
              <br />
              {contact.contactStatement}
              <a href={contact.emailLink}>{contact.email}</a>
              <br />
              {contact.businessStatement}
            </div>
            <div className="col-md-8">
              {contact.title}
              <br />
              {contact.address}
              <br />
              {contact.city}, {contact.state} {contact.zip}
              <br />
              {contact.phone}
            </div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Contact;
