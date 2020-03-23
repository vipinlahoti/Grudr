import React from 'react';
import { getSetting, Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const logoUrl = getSetting('logoUrl');
const siteTitle = getSetting('title', 'Grudr');

const NavLoggedIn = () =>
  <Nav className="ml-auto">
    <Link to={{ pathname: '/dashboard' }} className="nav-link">
      <FormattedMessage id="account.dashboard"/>
    </Link>
    <Link to={{ pathname: '/articles' }} className="nav-link">
      <FormattedMessage id="account.articles"/>
    </Link>
    <Link to={{ pathname: '/questions' }} className="nav-link">
      <FormattedMessage id="account.questions"/>
    </Link>
    <Components.UsersMenu />
  </Nav>

const NavLoggedOut = () =>
  <Nav className="ml-auto">
    <Link to={{ pathname: '/register' }} className="nav-link">
      <Components.Icon name="person_add" />
      <FormattedMessage id="user.register"/>
    </Link>

    <Components.Button variant="white" type="link" path="/login" iconButton="account">
      <FormattedMessage id="user.login"/>
    </Components.Button>
  </Nav>


const Header = ({ currentUser }) => {
  return (
    <Navbar variant="dark" bg="primary">
      <Container>
        <div className="collapse navbar-collapse">
          <Components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />

          {!!currentUser ? 
            <NavLoggedIn currentUser={currentUser}/> : 
            <NavLoggedOut currentUser={currentUser}/>
          }
        </div>
      </Container>
    </Navbar>
  );
};

Header.displayName = 'Header';

registerComponent({ name: 'Header', component: Header, hocs: [withCurrentUser]  });
