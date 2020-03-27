import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Navbar, Nav, Container } from 'react-bootstrap';

const siteTitle = Grudr.settings.get('title', 'Grudr');
const topNavLinks = Grudr.settings.get('topNavLinks');

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
    {topNavLinks.length ?
      topNavLinks.map((item, i) => (
        <Link key={i} to={{ pathname: item.link }} className={item.type ==='button' ? 'btn btn-white' : 'nav-link'}>
          {item.icon ? <Grudr.components.Icon name={item.icon} /> : null }
          {item.name}
        </Link>
      ))
    : null}
  </Nav>

const Header = () => 
  <Navbar variant="dark" bg="primary">
    <Container>
      <Grudr.components.Logo siteTitle={siteTitle}/>
      <NavLoggedOut />
    </Container>
  </Navbar>

module.exports = Header;
