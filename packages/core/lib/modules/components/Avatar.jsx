import Grudr from 'meteor/grudr:lib';
import Users from 'meteor/grudr:users';

import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Avatar = ({user, size, link, className}) => {

  const avatarClassNames = classNames('avatar', className);

  const sizes = {
    small: '50px',
    medium: '80px',
    large: '120px'
  }

  const aStyle = {
    borderRadius: '100%',
    display: 'inline-block',
    height: sizes[size],
    width: sizes[size]
  }; 

  const imgStyle = {
    borderRadius: '100%',
    display: 'block',
    height: sizes[size],
    width: sizes[size]
  }; 

  const avatarUrl = Users.avatar.getUrl(user);

  const img = <img alt={Users.getDisplayName(user)} style={imgStyle} className="shadow-lg avatar" src={avatarUrl} title={user.username} />;
  const initials = <span className={avatarClassNames}><span>{Users.avatar.getInitials(user)}</span></span>;

  const avatar = avatarUrl ? img : initials;

  return link ? <Link style={aStyle} className={avatarClassNames} to={Users.getProfileUrl(user)}>{avatar}</Link> : avatar;

};

Avatar.propTypes = {
  user: PropTypes.object.isRequired,
  size: PropTypes.string,
  link: PropTypes.bool
}

Avatar.defaultProps = {
  size: 'medium',
  link: true
}

Grudr.registerComponent('Avatar', Avatar);
