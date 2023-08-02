import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";

import "../styles/header.scss";

const Header = () => {
  return (
    <Navbar className="navBarCont" fixed="top" expand="lg">
      <Navbar.Brand href="/">Oige</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="menuLinks">
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Button className="headerButton" href="/insurance">
          Insurance stuff
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
