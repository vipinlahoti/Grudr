import Grudr from '@grudr';
import Link from 'next/link';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, Container } from 'react-bootstrap';

const siteTitle = 'Grudr';
// const logoUrl = Grudr.settings.get('logoUrl');
// {pathname === '/' ? 'is-active' : ''}

const NavLoggedOut = () => 
  <Nav className="ml-auto">
    <Link href='/'>
      <a className="nav-link">
        Home
      </a>
    </Link>

    <Link href='/register'>
      <a className="nav-link">
        Register
      </a>
    </Link>

    <Link href='/login'>
      <a className="btn btn-white">
        <Grudr.components.Icon name="account" />
        Login
      </a>
    </Link>
  </Nav>

const Header = props => {
  return (
    <Navbar variant="light">
      <Grudr.components.Logo siteTitle={siteTitle}/>
      <NavLoggedOut />
    </Navbar>
  )
}

Header.contextTypes = {
  currentUser: PropTypes.object,
};

Grudr.registerComponent('Header', Header);
