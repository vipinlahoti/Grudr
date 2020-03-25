import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Navbar, Nav, Container } from 'react-bootstrap';

import Grudr from '/imports/modules/core/config';

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
    <Nav.Link href="#home">
      <Grudr.components.Icon name="account" />
      <FormattedMessage id="pages.home"/>
    </Nav.Link>
    <Nav.Link href="#link">
      <FormattedMessage id="pages.about"/>
    </Nav.Link>
  </Nav>

const Header = () => 
  <Navbar variant="dark" bg="primary">
    <Container>
      <Grudr.components.Logo siteTitle={siteTitle}/>
      <NavLoggedOut />
    </Container>
  </Navbar>

module.exports = Header;
