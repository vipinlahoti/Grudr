import Grudr from 'meteor/grudr:lib';
import Users from 'meteor/grudr:users';
import { AccountsReact } from 'meteor/grudr:accounts';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router'
import { Modal } from 'react-bootstrap';

const UsersProfileCheckModal = ({show, router}, {currentUser}) => {
  console.log('show, router', show, router)
  // return fields that are required by the schema but haven't been filled out yet
  const schema = Users.simpleSchema()._schema;
  const requiredFields = _.filter(_.keys(schema), (fieldName) => {
    var field = schema[fieldName];
    return !!field.required && !Grudr.getNestedProperty(currentUser, fieldName);
  });

  return (
    <Modal bsSize='small' show={ show }>
      <Modal.Header>
        <Modal.Title><FormattedMessage id="users.complete_profile"/></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Check User Profile if all fields are filled
      </Modal.Body>
      <Modal.Footer>
        <FormattedMessage id="app.or"/> <a className="complete-profile-logout" onClick={ () => AccountsReact.logout() }><FormattedMessage id="users.log_out"/></a>
      </Modal.Footer>
    </Modal>
  )
};

const UserProfileCheck = (props, {currentUser}) => {
  console.log('UserProfileCheck show', Users.hasCompletedProfile(currentUser))
  return currentUser ? <UsersProfileCheckModal show={!Users.hasCompletedProfile(currentUser)}/> : null;
};

UserProfileCheck.contextTypes = {
  currentUser: PropTypes.object
};

UsersProfileCheckModal.contextTypes = {
  currentUser: PropTypes.object
};

Grudr.registerComponent('UserProfileCheck', withRouter(UserProfileCheck));
