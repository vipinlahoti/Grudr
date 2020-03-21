import React from 'react';
import { getSetting, Components, registerComponent } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const logoUrl = getSetting('logoUrl');
const siteTitle = getSetting('title', 'Grudr');

const Header = ({ flash, history }) => {
  return (
    <Navbar variant="dark" bg="primary">
      <Container>
        <div className="collapse navbar-collapse">
          <Components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />

          <Nav className="ml-auto">
            <Link to={{ pathname: '/register' }} className="nav-link">
              <Components.Icon name="person_add" />
              <FormattedMessage id="user.register"/>
            </Link>

            <Components.Button variant="white" type="link" path="/login" iconButton="account">
              <FormattedMessage id="user.login"/>
            </Components.Button>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

Header.displayName = 'Header';

registerComponent({ name: 'Header', component: Header });
