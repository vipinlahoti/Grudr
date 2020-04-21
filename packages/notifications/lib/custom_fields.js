import Users from 'meteor/grudr:users';

const notificationsGroup = {
  name: 'notifications',
  order: 2
};

// check if user can create a new account
const canInsert = user => Users.canDo(user, 'users.new');
// check if user can edit a user
const canEdit = Users.canEdit;

// Add notifications options to user profile settings
Users.addField([
  {
    fieldName: 'grudr.notifications_users',
    fieldSchema: {
      label: 'New users',
      type: Boolean,
      optional: true,
      defaultValue: false,
      control: 'checkbox',
      insertableIf: Users.isAdmin,
      editableIf: Users.isAdmin,
      group: notificationsGroup
    }
  }
]);
