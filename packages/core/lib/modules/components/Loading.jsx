import Grudr from 'meteor/grudr:lib';
import React from 'react';

const Loading = props => {
  return (
    <div>Loading</div>
  );
};

Grudr.registerComponent('Loading', Loading);
