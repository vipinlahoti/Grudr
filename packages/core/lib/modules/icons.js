import Grudr from './config.js';

/**
 * Take an icon name (such as "open") and return the HTML code to display the icon
 * @param {string} iconName - the name of the icon
 * @param {string} [iconClass] - an optional class to assign to the icon
 */
Grudr.utils.getIcon = function (iconName, iconClass) {
  const icons = Grudr.utils.icons;
  const iconCode = !!icons[iconName] ? icons[iconName] : iconName;
  iconClass = (typeof iconClass === 'string') ? ' ' + iconClass : '';
  const c = 'material-icons icon' + ' icon-' + iconName + iconClass;
  return '<i class="' + c + '" aria-hidden="true">' + iconCode + '</i>';
};

/**
 * A directory of icon keys and icon codes
 */
Grudr.utils.icons = {
  account: 'account_circle',
  person_add: 'person_add'
};
