import Grudr from 'meteor/grudr:lib';
import Users from './collection.js';

Users.getNotificationProperties = function (user) {
  const properties = {
    profileUrl: Users.getProfileUrl(user),
    displayName: Users.getDisplayName(user),
    siteTitle: Grudr.settings.get('title'),
    siteUrl: Grudr.utils.getSiteUrl()
  };
  return properties;
};
