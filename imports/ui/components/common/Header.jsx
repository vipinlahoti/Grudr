import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import Grudr from '/imports/modules/core/config';

const siteTitle = Grudr.settings.get('title', 'Grudr');

const NavLoggedIn = () =>
  <Nav className="ml-auto">
    <Nav.Link href="#home">Dashboard</Nav.Link>
    <Nav.Link href="#link">Articles</Nav.Link>
  </Nav>

const NavLoggedOut = () =>
  <Nav className="ml-auto">
    <Nav.Link href="#home">
      <Grudr.components.Icon name="account" />
      Home
    </Nav.Link>
    <Nav.Link href="#link">Link</Nav.Link>
  </Nav>

const Header = () => 
  <Navbar variant="dark" bg="primary">
    <Container>
      <Grudr.components.Logo siteTitle={siteTitle}/>
      <NavLoggedOut />
    </Container>
  </Navbar>

module.exports = Header;
