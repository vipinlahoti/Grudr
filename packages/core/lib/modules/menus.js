import Grudr from './config.js';

/**
 * Menus namespace
 * @namespace Grudr.menuItems
 */
Grudr.menuItems = {};

/**
 * Add one or more items to a menu
 * @param {string} menu - The name of the menu
 * @param {Object|Object[]} item - The menu item object (or an array of items)
 *
 * @example <caption>Using a named route</caption>
 * Grudr.menuItems.add("aboutPage", {
 *   route: 'about',
 *   label: 'About',
 *   description: 'This_is_about_description'
 * });
 *
 * @example <caption>Using a route function</caption>
 * Grudr.menuItems.add("userMenu", {
 *   route: function () {
 *     return FlowRouter.path('user_profile', {_idOrSlug: Meteor.user().grudr.slug});
 *   },
 *   label: 'profile',
 *   description: 'view_your_profile'
 * });
 *
 */
Grudr.menuItems.add = function (menu, item) {
  // if menu items array doesn't exist yet, initialize it
  if (typeof Grudr.menuItems[menu] === 'undefined') {
    Grudr.menuItems[menu] = [];
  }

  if (Array.isArray(item)) {
    const items = item; // we're dealing with an Array, so let's add an 's'    
    items.forEach( function (item) {
      Grudr.menuItems[menu].push(item);
    });
  }
  else {
    Grudr.menuItems[menu].push(item);
  }
};

/**
 * Remove an item from a menu
 * @param {string} menu - The name of the menu
 * @param {string} label - The label of the item to remove
 */
Grudr.menuItems.remove = function (menu, label) {
  Grudr.menuItems[menu] = _.reject(Grudr.menuItems[menu], function (menu) {
    return menu.label === label;
  });
};

/**
 * Remove all items from a menu
 * @param {string} menu - The name of the menu
 */
Grudr.menuItems.removeAll = function (menu) {
  Grudr.menuItems[menu] = [];
};

/**
 * Retrieve an array containing all items for a menu
 * @param {string} menu - The name of the menu
 */
Grudr.menuItems.get = function (menu) {
  return _.sortBy(Grudr.menuItems[menu], "order");
};
