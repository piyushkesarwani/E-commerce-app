import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import ecommerce from "../ecommerce.jpg";

export const Home = () => {
  return (
    <div className="container">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">E-commerce app</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/menu">Menu</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <img className="w-100 h-100" src={ecommerce} alt={ecommerce} />
        <div className="position-absolute top-50 start-50 translate-middle-x">
          <p className="text-md fs-1 fw-bold font-monospace w-100">
            Welcome to our Ecommerce App. Click to explore more.
          </p>
          <Link to='/menu'><button
            type="button"
            className="btn btn-primary btn-lg"
          >
            Get Started
          </button></Link>
        </div>
      </div>
    </div>
  );
};
