import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App';
import '/imports/modules/core/modules';
import '/imports/modules/components';
import './routes';

import '/imports/ui/styles/main.scss';

Meteor.startup(() => {
  render(<App/>, document.getElementById('react-target'));
});
