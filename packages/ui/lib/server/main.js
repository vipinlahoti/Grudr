export * from '../modules/index.js';

import { AccountsReact } from 'meteor/grudr:accounts'

Meteor.startup(() => {
  // This call sets the default package to display.
  AccountsReact.style(Package['grudr:accounts-unstyled'], true)
})
