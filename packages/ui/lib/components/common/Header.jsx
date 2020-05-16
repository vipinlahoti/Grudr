import Grudr from 'meteor/grudr:lib';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const siteTitle = Grudr.settings.get('title', 'Grudr');
const logoUrl = Grudr.settings.get('logoUrl');

const NavLoggedIn = ({user}) =>
  <Nav className="ml-auto">
    <Link to={{ pathname: '/dashboard' }} className="nav-link">
      Dashboard
    </Link>
  </Nav>

const NavLoggedOut = () => 
  <Nav className="ml-auto">
    <Link to={{ pathname: '/domains' }} className="nav-link">
      Domains
    </Link>

    <Link to={{ pathname: '/hosting' }} className="nav-link">
      Hosting
    </Link>

    <Link to={{ pathname: '/register' }} className="nav-link">
      Register
    </Link>

    <Grudr.components.Button type="link" path="/login">
      Login
    </Grudr.components.Button>
  </Nav>

const Header = (props, {currentUser}) => {
  return (
    <Navbar variant="light">
      <Grudr.components.Logo logoUrl={logoUrl} siteTitle={siteTitle}/>
      { currentUser ? <NavLoggedIn user={currentUser} /> : <NavLoggedOut /> }
    </Navbar>
  )
}

Header.contextTypes = {
  currentUser: PropTypes.object,
};

Grudr.registerComponent('Header', Header);
