import Grudr from 'meteor/grudr:lib';
import Users from 'meteor/grudr:users';
import { AccountsReact } from 'meteor/grudr:accounts';
import GrudrForm from 'meteor/grudr:forms';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Modal } from 'react-bootstrap';

const UsersProfileCheckModal = ({show, router}, {currentUser}) => {
  // console.log('show, router', show, router)
  // return fields that are required by the schema but haven't been filled out yet
  const schema = Users.simpleSchema()._schema;
  const requiredFields = _.filter(Object.keys(schema), function (fieldName) {
    const field = schema[fieldName];
    return !!field.mustComplete && !Grudr.getNestedProperty(currentUser, fieldName);
  });

  console.log('schema: ', requiredFields);

  // return requiredFields;

  return (
    <Modal show={ show }>
      <Modal.Header>
        <Modal.Title><FormattedMessage id="users.complete_profile"/></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <GrudrForm
          collection={Users}
          document={currentUser}
          methodName="users.edit"
          layout="vertical"
          successCallback={(user) => Grudr.callbacks.runAsync('users.profileCompleted.async', user)}
          fields={requiredFields}
        />
      </Modal.Body>
      <Modal.Footer>
        <FormattedMessage id="app.or"/> <a className="complete-profile-logout" onClick={ () => AccountsReact.logout() }><FormattedMessage id="users.log_out"/></a>
      </Modal.Footer>
    </Modal>
  )
};

const UserProfileCheck = (props, {currentUser}) => {
  return currentUser ? <UsersProfileCheckModal show={!Users.hasCompletedProfile(currentUser)}/> : null;
};

UserProfileCheck.contextTypes = {
  currentUser: PropTypes.object
};

UsersProfileCheckModal.contextTypes = {
  currentUser: PropTypes.object
};

Grudr.registerComponent('UserProfileCheck', UserProfileCheck);
