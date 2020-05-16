import { Meteor } from 'meteor/meteor';
import { onPageLoad } from 'meteor/server-render';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

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
