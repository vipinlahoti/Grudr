import Grudr from 'meteor/grudr:lib';
import Users from './collection.js';

/*
var completeUserProfile = function (userId, modifier, user) {
  Users.update(userId, modifier);
  Grudr.callbacks.runAsync('users.profileCompleted.async', Users.findOne(userId));
  return Users.findOne(userId);
};
*/

Users.methods = {};

/**
 * @summary Edit a user in the database
 * @param {string} userId – the ID of the user being edited
 * @param {Object} modifier – the modifier object
 * @param {Object} user - the current user object
 */
Users.methods.edit = (userId, modifier, user) => {

  if (typeof user === 'undefined') {
    user = Users.findOne(userId);
  }

  // ------------------------------ Callbacks ------------------------------ //

  modifier = Grudr.callbacks.run('users.edit.sync', modifier, user);

  // ------------------------------ Update ------------------------------ //

  Users.update(userId, modifier);

  // ------------------------------ Callbacks ------------------------------ //

  Grudr.callbacks.runAsync('users.edit.async', Users.findOne(userId), user);

  // ------------------------------ After Update ------------------------------ //
  return Users.findOne(userId);

}

Users.methods.setSetting = (userId, settingName, value) => {
  // all settings should be in the user.grudr namespace, so add '' if needed
  var field = settingName.slice(0,10) === '' ? settingName : '' + settingName;

  var modifier = {$set: {}};
  modifier.$set[field] = value;

  Users.update(userId, modifier);
}

Users.methods.addGroup = (userId, groupName) => {
  Users.update(userId, {$push: {'groups': groupName}});
};

Users.methods.removeGroup = (userId, groupName) => {
  Users.update(userId, {$pull: {'groups': groupName}});
};

Meteor.methods({
  'users.edit'(userId, modifier) {
    // console.log('Users.simpleSchema(): ', Users.simpleSchema()._schema);
    // checking might be redundant because SimpleSchema already enforces the schema, but you never know
    // check(modifier, Match.OneOf({$set: Users.simpleSchema()}, {$unset: Object}, {$set: Users.simpleSchema(), $unset: Object}));
    check(modifier, Match.OneOf({$set: Object}, {$unset: Object}, {$set: Object, $unset: Object}));
    check(userId, String);

    const currentUser = Meteor.user();
    const user = Users.findOne(userId);
    const schema = Users.simpleSchema()._schema;

    // ------------------------------ Checks ------------------------------ //

    // check that user can edit document
    if (!user || !Users.canEdit(currentUser, user)) {
      throw new Meteor.Error(601, 'Sorry you cannot edit this user');
    }

    // go over each field and throw an error if it's not editable
    // loop over each operation ($set, $unset, etc.)
    _.each(modifier, function (operation) {
      // loop over each property being operated on
      _.keys(operation).forEach(function (fieldName) {

        var field = schema[fieldName];
        if (!Users.canEditField(currentUser, field, user)) {
          throw new Meteor.Error('disallowed_property', 'Disallowed property detected' + ': ' + fieldName);
        }

      });
    });

    return Users.methods.edit(userId, modifier, user);

  },

  'users.remove'(userId, options) {
    // do the user which to delete his account or another user?
    const actionType = this.userId === userId ? 'own' : 'all';

    if (Users.canDo(Meteor.user(), `users.remove.${actionType}`)) {
      const user = Users.findOne(userId);
      Users.remove(userId);
      Grudr.callbacks.runAsync('users.remove.async', user, options);
    }

  },

  'users.setSetting'(userId, settingName, value) {

    check(userId, String);
    check(settingName, String);
    check(value, Match.OneOf(String, Number, Boolean));

    var currentUser = Meteor.user(),
      user = Users.findOne(userId);

    // check that user can edit document
    if (!user || !Users.canEdit(currentUser, user)) {
      throw new Meteor.Error(601, 'sorry_you_cannot_edit_this_user');
    }

    Users.methods.setSetting(userId, settingName, value);
  }

});
