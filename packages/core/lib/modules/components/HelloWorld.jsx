import Grudr from 'meteor/grudr:lib';
import { AccountsReactComponent } from 'meteor/grudr:accounts'
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

const loginWrapper = {
  margin: '3rem auto',
  width: '450px'
}

const HelloWorld = () => 
  <div style={loginWrapper}>
    <h2>Hello World!!</h2>
  </div>

Grudr.registerComponent('HelloWorld', HelloWorld);
