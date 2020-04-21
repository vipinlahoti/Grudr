import Grudr from 'meteor/grudr:lib';
import { Accounts } from 'meteor/accounts-base'

function grudrCreateUserCallback (options, user) {
  user = Grudr.callbacks.run('users.new.sync', user, options);
  return user;
}

Accounts.onCreateUser(grudrCreateUserCallback);
