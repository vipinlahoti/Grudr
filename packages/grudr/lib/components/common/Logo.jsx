import { registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = ({ logoUrl, siteTitle }) => {
  if (logoUrl) {
    return (
      <NavLink exact to={{ pathname: '/' }} className="navbar-brand">
        <img src={logoUrl} alt={siteTitle} />
      </NavLink>
    );
  } else {
    return (
      <NavLink exact to={{ pathname: '/' }} className="navbar-brand">
        {siteTitle}
      </NavLink>
    );
  }
};

Logo.displayName = 'Logo';

registerComponent({ name: 'Logo', component: Logo });
