import Grudr from 'meteor/grudr:lib';
import React from 'react';
import Button from 'react-bootstrap/Button';

const Forms = ({children}) => {
  return (
    <div>{children}</div>
  );
};

Grudr.registerComponent('Forms', Forms);
