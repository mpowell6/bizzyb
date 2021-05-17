import React from "react";
import "./Navigation.css";
import {Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">
            Bizzy-B
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-Navbar-Nav" />
          <Navbar.Collapse id="responsive-Navbar-Nav">
            <Nav className="mr-auto">
              <Link to="/">Home</Link>
              <Link to="/Services">Services</Link>
              <Link to="/About">About</Link>
              <Link to="/Contact">Contact</Link>
              <Link to="/Careers">Careers</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
