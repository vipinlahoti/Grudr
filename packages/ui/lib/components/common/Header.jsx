import Grudr from 'meteor/grudr:lib';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

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
    <NavDropdown title="Products" id="basic-nav-products">
      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>

    <NavDropdown title="Features" id="basic-nav-features">
      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>

    <Link to={{ pathname: '/register' }} className="nav-link">
      Register
    </Link>

    <Grudr.components.Button variant="white" type="link" path="/login">
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
