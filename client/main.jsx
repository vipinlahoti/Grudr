import React from 'react';
import { Meteor } from 'meteor/meteor';
import { onPageLoad } from 'meteor/server-render';
import ReactDOM from 'react-dom';

import '/imports/modules';
import '/imports/ui/styles/main.scss';

Meteor.startup(() => {
onPageLoad(async sink => {
    const App = (await import('/imports/ui/components/core/App')).default;
    
    ReactDOM.render(<App />, document.getElementById('react-app'));
  });
})
