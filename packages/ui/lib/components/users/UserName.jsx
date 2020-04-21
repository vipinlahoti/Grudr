import Grudr from 'meteor/grudr:lib';
import Users from 'meteor/grudr:users';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const UsersName = ({user}) => <Link className="users-name" to={Users.getProfileUrl(user)}>{Users.getDisplayName(user)}</Link>

UsersName.propTypes = {
  user: PropTypes.object.isRequired,
}

Grudr.registerComponent('UsersName', UsersName);
