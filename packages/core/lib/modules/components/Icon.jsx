import React from 'react';
import Grudr from '../config';

const Icon = ({ name, iconClass }) => {
  const icons = Grudr.utils.icons;
  const iconCode = !!icons[name] ? icons[name] : name;
  iconClass = (typeof iconClass === 'string') ? ' ' + iconClass : '';
  const c = 'material-icons icon' + ' icon-' + name + iconClass;
  return <i className={c} aria-hidden="true">{iconCode}</i>;
}

Grudr.registerComponent('Icon', Icon);
