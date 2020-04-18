import Grudr from 'meteor/grudr:lib';

/**
 * @summary Grudr Users namespace
 * @namespace Users
 */
const Users = Meteor.users;

Grudr.subscriptions.preload('users.current');

export default Users;
