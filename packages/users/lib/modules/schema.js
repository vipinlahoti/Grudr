import Grudr from 'meteor/grudr:lib';
import SimpleSchema from 'simpl-schema';
import Users from './collection.js';

const adminGroup = {
  name: 'admin',
  order: 10
};

// check if user can create a new user
const canInsert = user => Users.canDo(user, 'users.new');

// check if user can edit a user
const canEdit = Users.canEdit;

// check if user can edit *all* users
const canEditAll = user => Users.canDo(user, 'users.edit.all');

/**
 * @summary User Data schema
 * @type {SimpleSchema}
 */
Grudr.schemas.userData = new SimpleSchema({
  /**
    Bio (Markdown version)
  */
  bio: {
    type: String,
    // optional: true,
    control: 'textarea',
    insertableIf: canInsert,
    editableIf: canEdit,
    required: true,
    // form: {
    //   rows: 5
    // }
  },
  /**
    The name displayed throughout the app. Can contain spaces and special characters, doesn't need to be unique
  */
  displayName: {
    type: String,
    optional: true,
    publish: true,
    profile: true,
    control: 'text',
    insertableIf: canInsert,
    editableIf: canEdit
  },
  /**
    The user's email. Modifiable.
  */
  email: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Email,
    required: true,
    control: 'text',
    insertableIf: canInsert,
    editableIf: canEdit
    // unique: true // note: find a way to fix duplicate accounts before enabling this
  },
  /**
    A hash of the email, used for Gravatar // TODO: change this when email changes
  */
  emailHash: {
    type: String,
    publish: true,
    optional: true
  },
  /**
    The HTML version of the bio field
  */
  htmlBio: {
    type: String,
    publish: true,
    profile: true,
    optional: true,
    // form: {
    //   omit: true
    // },
    template: 'user_profile_bio'
  },
  /**
    The user's karma
  */
  karma: {
    type: Number,
    // decimal: true,
    publish: true,
    optional: true
  },
  /**
    A blackbox modifiable object to store the user's settings
  */
  // settings: {
  //   type: Object,
  //   optional: true,
  //   editableIf: canEdit,
  //   blackbox: true,
  //   form: {
  //     omit: true
  //   }
  // },
  /**
    The user's profile URL slug // TODO: change this when displayName changes
  */
  slug: {
    type: String,
    publish: true,
    optional: true
  },
  /**
    The user's Twitter username
  */
  twitterUsername: {
    type: String,
    optional: true,
    publish: true,
    profile: true,
    control: 'text',
    insertableIf: canInsert,
    editableIf: canEdit,
    template: 'user_profile_twitter'
  },
  /**
    A link to the user's homepage
  */
  website: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    publish: true,
    profile: true,
    optional: true,
    control: 'text',
    insertableIf: canInsert,
    editableIf: canEdit
  },
  /**
    Groups
  */
  groups: {
    type: Array,
    optional: true,
    control: 'checkboxgroup',
    insertableIf: canEditAll,
    editableIf: canEditAll,
    form: {
      options: function () {
        const groups = _.without(_.keys(Users.groups), 'anonymous', 'default', 'admins');
        return groups.map(group => {return {value: group, label: group};});
      }
    },
  },
  'groups.$': {
    type: String,
    optional: true,
  }
});

/**
 * @summary Users schema
 * @type {SimpleSchema}
 */
Users.schema = new SimpleSchema({
  _id: {
    type: String,
    publish: true,
    optional: true
  },
  username: {
    type: String,
    // regEx: /^[a-z0-9A-Z_]{3,15}$/,
    publish: true,
    optional: true
  },
  emails: {
    type: Array,
    optional: true
  },
  'emails.$': {
    type: String,
    optional: true,
  },
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    optional: true
  },
  'emails.$.verified': {
    type: Boolean,
    optional: true
  },
  createdAt: {
    type: Date,
    publish: true,
    optional: true
  },
  isAdmin: {
    type: Boolean,
    label: 'Admin',
    control: 'checkbox',
    optional: true,
    insertableIf: canEditAll,
    editableIf: canEditAll,
    group: adminGroup
    // form: {
    //   omit: true
    // }
  },
  profile: {
    type: Object,
    optional: true,
    blackbox: true
  },
  grudr: { // grudr-specific data
    type: Grudr.schemas.userData,
    optional: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  }
});

// Meteor.startup(function(){
//   Users.internationalize();
// });

/**
 * @summary Attach schema to Users (Meteor.users at the moment) collection
 */
Users.attachSchema(Users.schema);
