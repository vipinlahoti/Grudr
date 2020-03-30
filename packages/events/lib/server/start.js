import Events from "meteor/grudr:events";

Meteor.startup(function () {
  Events.log({
    name: 'firstRun',
    unique: true, // will only get logged a single time
    important: true
  });
});
