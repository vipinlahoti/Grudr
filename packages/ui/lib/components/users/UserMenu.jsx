import Grudr from 'meteor/grudr:lib';
import Users from 'meteor/grudr:users';
import { AccountsReact } from 'meteor/grudr:accounts';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class UserMenu extends Component {
  render() {
    const { currentUser } = this.context;

    return (
      <React.Fragment>
         <Dropdown id="user-dropdown">
          <Dropdown.Toggle variant="none">
            <Grudr.components.Avatar size="small" user={currentUser} link={false} />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-right">
            <LinkContainer to={`/users/${currentUser.grudr.slug}`}>
              <Dropdown.Item eventKey="1"><FormattedMessage id="users.profile"/></Dropdown.Item>
            </LinkContainer>
            <LinkContainer to={`/users/${currentUser.grudr.slug}/edit`}>
              <Dropdown.Item eventKey="2"><FormattedMessage id="users.edit_account"/></Dropdown.Item>
            </LinkContainer>
            <LinkContainer to={`/cheatsheet`}>
              <Dropdown.Item eventKey="2"><FormattedMessage id="debug.cheatsheet"/></Dropdown.Item>
            </LinkContainer>
            <LinkContainer to={`/groups`}>
              <Dropdown.Item eventKey="2"><FormattedMessage id="debug.groups"/></Dropdown.Item>
            </LinkContainer>
            <LinkContainer to={`/emails`}>
              <Dropdown.Item eventKey="2"><FormattedMessage id="debug.emails"/></Dropdown.Item>
            </LinkContainer>
            <Dropdown.Item eventKey="3" onClick={() => AccountsReact.logout()}><FormattedMessage id="users.log_out"/></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </React.Fragment>
    )

  }
}

UserMenu.contextTypes = {
  currentUser: PropTypes.object,
  messages: PropTypes.object
}

Grudr.registerComponent('UserMenu', UserMenu);
