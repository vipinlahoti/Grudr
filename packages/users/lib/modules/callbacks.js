import Grudr from 'meteor/grudr:lib';
// import Events from 'meteor/grudr:events';
import GrudrEmail from 'meteor/grudr:email';
// import { Gravatar } from 'meteor/jparker:gravatar';
import marked from 'marked';
import Users from './collection.js';

//////////////////////////////////////////////////////
// Collection Hooks                                 //
//////////////////////////////////////////////////////

/**
 * @summary Generate HTML body from Markdown on user bio insert
 */
Users.after.insert(function (userId, user) {

  // run create user async callbacks
  Grudr.callbacks.runAsync('users.new.async', user);

  // check if all required fields have been filled in. If so, run profile completion callbacks
  if (Users.hasCompletedProfile(user)) {
    Grudr.callbacks.runAsync('users.profileCompleted.async', user);
  }

});

/**
 * @summary Generate HTML body from Markdown when user bio is updated
 */
Users.before.update(function (userId, doc, fieldNames, modifier) {
  // if bio is being modified, update htmlBio too
  if (Meteor.isServer && modifier.$set && modifier.$set['bio']) {
    modifier.$set['htmlBio'] = Grudr.utils.sanitize(marked(modifier.$set['bio']));
  }
});

/**
 * @summary Disallow $rename
 */
Users.before.update(function (userId, doc, fieldNames, modifier) {
  if (!!modifier.$rename) {
    throw new Meteor.Error('illegal $rename operator detected!');
  }
});

/**
 * @summary If user.email has changed, check for existing emails and change user.emails and email hash if needed
 */
 if (Meteor.isServer) {
  Users.before.update(function (userId, doc, fieldNames, modifier) {

    var user = doc;

    // if email is being modified, update user.emails too
    if (Meteor.isServer && modifier.$set && modifier.$set['email']) {

      var newEmail = modifier.$set['email'];

      // check for existing emails and throw error if necessary
      var userWithSameEmail = Users.findByEmail(newEmail);
      if (userWithSameEmail && userWithSameEmail._id !== doc._id) {
        throw new Meteor.Error('email_taken2', 'this_email_is_already_taken' + ' (' + newEmail + ')');
      }

      // if user.emails exists, change it too
      if (!!user.emails) {
        user.emails[0].address = newEmail;
        modifier.$set.emails = user.emails;
      }

      // update email hash
      // modifier.$set['emailHash'] = Gravatar.hash(newEmail);

    }
  });
}

//////////////////////////////////////////////////////
// Callbacks                                        //
//////////////////////////////////////////////////////

/**
 * @summary Set up user object on creation
 * @param {Object} user – the user object being iterated on and returned
 * @param {Object} options – user options
 */
function setupUser (user, options) {
  // ------------------------------ Properties ------------------------------ //
  var userProperties = {
    profile: options.profile || {},
    grudr: {
      karma: 0,
      isInvited: false,
      postCount: 0,
      commentCount: 0,
      invitedCount: 0,
      upvotedPosts: [],
      downvotedPosts: [],
      upvotedComments: [],
      downvotedComments: []
    }
  };
  user = _.extend(user, userProperties);

  // look in a few places for the user email
  if (options.email) {
    user.email = options.email;
  } else if (user.services['meteor-developer'] && user.services['meteor-developer'].emails) {
    user.email = _.findWhere(user.services['meteor-developer'].emails, { primary: true }).address;
  } else if (user.services.facebook && user.services.facebook.email) {
    user.email = user.services.facebook.email;
  } else if (user.services.github && user.services.github.email) {
    user.email = user.services.github.email;
  } else if (user.services.google && user.services.google.email) {
    user.email = user.services.google.email;
  } else if (user.services.linkedin && user.services.linkedin.emailAddress) {
    user.email = user.services.linkedin.emailAddress;
  }

  // generate email hash
  // if (!!user.email) {
  //   user.emailHash = Gravatar.hash(user.email);
  // }

  // look in a few places for the displayName
  if (user.profile.username) {
    user.displayName = user.profile.username;
  } else if (user.profile.name) {
    user.displayName = user.profile.name;
  } else if (user.services.linkedin && user.services.linkedin.firstName) {
    user.displayName = user.services.linkedin.firstName + ' ' + user.services.linkedin.lastName;
  } else {
    user.displayName = user.username;
  }

  // create a basic slug from display name and then modify it if this slugs already exists;
  const basicSlug = Grudr.utils.slugify(user.displayName);
  user.slug = Grudr.utils.getUnusedSlug(Users, basicSlug);

  // if this is not a dummy account, and is the first user ever, make them an admin
  user.isAdmin = (!user.profile.isDummy && Users.find({'profile.isDummy': {$ne: true}}).count() === 0) ? true : false;

  // Events.track('new user', {username: user.displayName, email: user.email});

  return user;
}
Grudr.callbacks.add('users.new.sync', setupUser);


function hasCompletedProfile (user) {
  return Users.hasCompletedProfile(user);
}
Grudr.callbacks.add('users.profileCompleted.sync', hasCompletedProfile);

function adminUserCreationNotification (user) {
  // send notifications to admins
  const admins = Users.adminUsers();
  admins.forEach(function(admin) {
    if (Users.getSetting(admin, 'notifications_users', false)) {
      const emailProperties = Users.getNotificationProperties(user);
      const html = GrudrEmail.getTemplate('newUser')(emailProperties);
      GrudrEmail.send(Users.getEmail(admin), `New user account: ${emailProperties.displayName}`, GrudrEmail.buildTemplate(html));
    }
  });
  return user;
}
Grudr.callbacks.add('users.new.sync', adminUserCreationNotification);
