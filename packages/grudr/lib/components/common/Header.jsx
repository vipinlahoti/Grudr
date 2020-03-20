import React from 'react';
import { getSetting, Components, registerComponent } from 'meteor/vulcan:core';
import { Navbar, Nav } from 'react-bootstrap';

const logoUrl = getSetting('logoUrl');
const siteTitle = getSetting('title', 'Grudr');
const tagline = getSetting('tagline');

const Header = ({ flash, history }) => {
  return (
    <Navbar variant="dark" bg="primary">
      <div className="collapse navbar-collapse">
        <Components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />
        {tagline ? <span>{tagline}</span> : ''}

        <Nav className="ml-auto">
          <Components.UsersMenu />
        </Nav>
      </div>
    </Navbar>
  );
};

Header.displayName = 'Header';

registerComponent({ name: 'Header', component: Header });
