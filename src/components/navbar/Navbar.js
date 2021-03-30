import React from "react";
import "./Navbar.css";
import * as Nav from "react-bootstrap";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <Nav.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Nav.Navbar.Brand href="/">
            Bizzy-B
          </Nav.Navbar.Brand>
          <Nav.Navbar.Toggle aria-controls="responsive-Nav.Navbar-Nav.Nav" />
          <Nav.Navbar.Collapse id="responsive-Nav.Navbar-Nav.Nav">
            <Nav.Nav className="mr-auto">
              <Nav.Nav.Link href="/">Home</Nav.Nav.Link>
              <Nav.Nav.Link href="/Services">Services</Nav.Nav.Link>
              <Nav.Nav.Link href="/About">About Us</Nav.Nav.Link>
              <Nav.Nav.Link href="/Contact">Contact Us</Nav.Nav.Link>
            </Nav.Nav>
          </Nav.Navbar.Collapse>
        </Nav.Navbar>
      </div>
    );
  }
}

export default Navbar;
