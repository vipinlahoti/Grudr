import React from 'react';
import { Meteor } from 'meteor/meteor';
import { onPageLoad } from 'meteor/server-render';
import ReactDOM from 'react-dom';
import '/imports/modules/core/modules';
import '/imports/modules/components';
import './routes';

import '/imports/ui/styles/main.scss';

Meteor.startup(() => {
onPageLoad(async sink => {
    const App = (await import('/imports/ui/App')).default;
    
    ReactDOM.hydrate(<App />, document.getElementById('react-app'));
  });
})
