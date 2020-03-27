import React from 'react';
import { Meteor } from 'meteor/meteor';
import { onPageLoad } from 'meteor/server-render';
import ReactDOM from 'react-dom';
import App from './components/App';
import Grudr from '../modules';

Meteor.startup(() => {
  const rootElement = document.createElement('div');
  rootElement.id = 'react-app';
  document.body.appendChild(rootElement);

  ReactDOM.render(<App />, document.getElementById('react-app'));

});

export default Grudr;
