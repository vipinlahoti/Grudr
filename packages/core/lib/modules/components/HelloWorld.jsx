import Grudr from 'meteor/grudr:lib';
import React from 'react';

const wrapper = {
  fontFamily: '"Open Sans", sans-serif',
  background: '#F7F6F5',
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const HelloWorld = () => 
  <div style={wrapper}>
    <h2>Hello World!!</h2>
  </div>

Grudr.registerComponent('HelloWorld', HelloWorld);
