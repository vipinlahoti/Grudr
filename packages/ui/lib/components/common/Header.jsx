import Grudr from 'meteor/grudr:lib';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Navbar, Nav, Container } from 'react-bootstrap';

const siteTitle = Grudr.settings.get('title', 'Grudr');
const logoUrl = Grudr.settings.get('logoUrl');

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
    <Link to={{ pathname: '/' }} className="nav-link">
      <FormattedMessage id="pages.home"/>
    </Link>

    <Link to={{ pathname: '/register' }} className="nav-link">
      <FormattedMessage id="accounts.register"/>
    </Link>

    <Link to={{ pathname: '/login' }} className="btn btn-white">
      <Grudr.components.Icon name="account" />
      <FormattedMessage id="accounts.login"/>
    </Link>
  </Nav>

const Header = () => 
  <Navbar variant="light">
    <Grudr.components.Logo logoUrl={logoUrl} siteTitle={siteTitle}/>
    <NavLoggedOut />
  </Navbar>

Grudr.registerComponent('Header', Header);
