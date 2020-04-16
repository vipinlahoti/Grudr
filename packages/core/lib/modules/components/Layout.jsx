import Grudr from 'meteor/grudr:lib';
import React from 'react';

const Layout = ({children}) =>
  <div className="wrapper" id="wrapper">{children}</div>;

Grudr.registerComponent('Layout', Layout);
