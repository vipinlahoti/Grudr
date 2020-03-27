import React from 'react';
import Grudr from '../config';

const Layout = ({children}) =>
  <div className="wrapper" id="wrapper">{children}</div>;

Grudr.registerComponent('Layout', Layout);
