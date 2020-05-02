import Grudr from '@grudr';
import Link from 'next/link';
import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const siteTitle = 'Grudr';
// const logoUrl = Grudr.settings.get('logoUrl');

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
  console.log('Header: ', Grudr);

  return (
    <Navbar variant="light">
      <Grudr.components.Logo siteTitle={siteTitle}/>
      <NavLoggedOut />
    </Navbar>
  )
}

Grudr.registerComponent('Header', Header);
