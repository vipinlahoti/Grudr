import Grudr from 'meteor/grudr:lib';
import Users from 'meteor/grudr:users';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

const UserProfile = ({ currentUser }) => {

  return (
    <div className="page users-profile">
      users-profile
    </div>
  )
}

UserProfile.contextTypes = {
  currentUser: PropTypes.object
}

Grudr.registerComponent('UserProfile', UserProfile);
