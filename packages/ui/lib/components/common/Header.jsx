import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Navbar, Nav, Container } from 'react-bootstrap';

const siteTitle = Grudr.settings.get('title', 'Grudr');

const NavLoggedIn = () =>
  <Nav className="ml-auto">
    <Nav.Link href="#home">
      <FormattedMessage id="pages.dashboard"/>
    </Nav.Link>
    <Nav.Link href="#link">
      <FormattedMessage id="pages.articles"/>
    </Nav.Link>
  </Nav>

const NavLoggedOut = () =>
  <Nav className="ml-auto">
    <Link to={{ pathname: '/register' }} className="nav-link">
      <Grudr.components.Icon name="person_add" />
      <FormattedMessage id="accounts.register"/>
    </Link>

    <Link to={{ pathname: '/login' }} className="btn btn-white">
      <Grudr.components.Icon name="account" />
      <FormattedMessage id="accounts.login"/>
    </Link>
  </Nav>

const Header = () => 
  <Navbar variant="dark" bg="primary">
    <Container>
      <Grudr.components.Logo siteTitle={siteTitle}/>
      <NavLoggedOut />
    </Container>
  </Navbar>

module.exports = Header;
