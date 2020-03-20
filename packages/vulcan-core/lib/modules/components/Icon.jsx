import { replaceComponent, Utils } from 'meteor/vulcan:lib';
import React from 'react';

const Icon = ({ name, iconClass, onClick }) => {
  const icons = Utils.icons;
  const iconCode = !!icons[name] ? icons[name] : name;
  const cl = 'material-icons icon icon-' + name;
  return <i onClick={onClick} className={cl} aria-hidden="true">{iconCode}</i>;
};

Icon.displayName = 'Icon';

replaceComponent('Icon', Icon);
