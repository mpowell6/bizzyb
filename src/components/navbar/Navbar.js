import React from "react";
import "./Navbar.css";
import * as Nav from "react-bootstrap";
import { Link } from "react-router-dom";

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
              <Link to="/">Home</Link>
              <Link to="/Services">Services</Link>
              <Link to="/About">About</Link>
              <Link to="/Contact">Contact</Link>
            </Nav.Nav>
          </Nav.Navbar.Collapse>
        </Nav.Navbar>
      </div>
    );
  }
}

export default Navbar;
