import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./Contact.css";

const contact = require("../../resources/contact.json");

const Contact = () => {
  return (
    <div className="Contact">
      <Jumbotron className="contactJumbotron">
        <Container bsPrefix="headerContainer col-md-6">
          <div className="headerArea">
            <div className="contactStatement">
              <p>
                {contact.travelStatement}
                <br />
                {contact.contactStatement}
                <a href={contact.emailLink}>{contact.email}</a>
                <br />
                {contact.businessStatement}
              </p>
            </div>
            <br />
            <div className="contact">
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
