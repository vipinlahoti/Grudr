import Grudr from 'meteor/grudr:lib';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { AccountsReact } from 'meteor/grudr:accounts';

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
    <Grudr.components.Button variant="danger" icon="lock_outline" onClick={() => AccountsReact.logout() }>
      <FormattedMessage id="accounts.logout"/>
    </Grudr.components.Button>
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

const Header = (props, {currentUser}) => {
  console.log('currentUser: ', currentUser)
  return (
    <Navbar variant="light">
      <Grudr.components.Logo logoUrl={logoUrl} siteTitle={siteTitle}/>
      { currentUser ? <NavLoggedIn /> : <NavLoggedOut /> }
    </Navbar>
  )
}

Header.contextTypes = {
  currentUser: PropTypes.object,
};

Grudr.registerComponent('Header', Header);
