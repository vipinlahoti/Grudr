import Grudr from 'meteor/grudr:lib';
import Users from 'meteor/grudr:users';

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const loginWrapper = {
  margin: '6rem auto',
  textAlign: 'center',
  width: '450px'
}

const CanDo = (props, context) => {
  // no user login, display the login form
  if (!context.currentUser && props.displayNoPermissionMessage) {
    return (
      <div style={loginWrapper}>
        <h3>Please Login</h3>
      </div>
    );
  }

  // default permission, is the user allowed to perform this action?
  let permission = Users.canDo(context.currentUser, props.action);

  // the permission is about viewing a document, check if the user is allowed
  if (props.document && props.action.indexOf('view') > -1) {
    // use the permission shortcut canView on the current user and requested document
    permission = Users.canView(context.currentUser, props.document);
  }

  // the permission is about editing a document, check if the user is allowed
  if (props.document && props.action.indexOf('edit') > -1) {
    // use the permission shortcut canEdit on the current user and requested document
    permission = Users.canEdit(context.currentUser, props.document);
  }

  // the user can perform the intented action in the component: display the component, 
  // else: display a not allowed message
  if (permission) {
    return props.children;
  } else {
    return props.displayNoPermissionMessage ? <p><FormattedMessage id={props.noPermissionMessage}/></p> : null;
  }
};

CanDo.contextTypes = {
  currentUser: PropTypes.object
};

CanDo.propTypes = {
  action: PropTypes.string.isRequired,
  document: PropTypes.object,
  noPermissionMessage: PropTypes.string,
  displayNoPermissionMessage: PropTypes.bool,
};

CanDo.defaultProps = {
  noPermissionMessage: 'app.noPermission',
  displayNoPermissionMessage: false,
};

Grudr.registerComponent('CanDo', CanDo);
