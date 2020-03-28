import Grudr from './config.js';

Grudr.settings = {};

Grudr.settings.getFromJSON = function (setting) {
  if (Meteor.isServer && Meteor.settings && typeof Meteor.settings[setting] !== 'undefined') { // if on the server, look in Meteor.settings
    return Meteor.settings[setting];
  } else if (Meteor.settings && Meteor.settings.public && typeof Meteor.settings.public[setting] !== 'undefined') { // look in Meteor.settings.public
    return Meteor.settings.public[setting];
  } else {
    return undefined;
  }
}

Grudr.settings.get = function (setting, defaultValue) {
  const collection = Grudr.settings.collection;
  
  if (typeof Grudr.settings.getFromJSON(setting) !== 'undefined') { // if on the server, look in Meteor.settings
    return Grudr.settings.getFromJSON(setting);
  } else if (collection && collection.findOne() && typeof collection.findOne()[setting] !== 'undefined') { // look in collection
    return Grudr.settings.collection.findOne()[setting];
  } else if (typeof defaultValue !== 'undefined') { // fallback to default
    return  defaultValue;
  } else { // or return undefined
    return undefined;
  }
};

