import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ siteTitle }) =>
  <Link to={{ pathname: '/' }} className="navbar-brand">
    {siteTitle}
  </Link>

module.exports = Logo;
