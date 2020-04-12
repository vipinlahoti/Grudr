import Grudr from 'meteor/grudr:core';

import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ logoUrl, siteTitle }) => {
  if (logoUrl) {
    return (
      <Link to={{ pathname: '/' }} className="navbar-brand">
        <img src={logoUrl} alt={siteTitle} />
      </Link>
    )
  } else {
    return (
      <Link to={{ pathname: '/' }} className="navbar-brand">
        {siteTitle}
      </Link>
    )
  }
}

Grudr.registerComponent('Logo', Logo);
