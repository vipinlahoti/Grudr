import { Meteor } from 'meteor/meteor';
import { onPageLoad } from 'meteor/server-render';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Create the root element
// const rootElement = document.createElement('div');
// rootElement.id = 'react-app';
// document.body.appendChild(rootElement);

const Main = () => 
  <BrowserRouter>
    <Grudr.components.App />
  </BrowserRouter>;

onPageLoad(sink => {
  ReactDOM.hydrate(
    <Main/>,
    document.getElementById('react-app')
  );
});
