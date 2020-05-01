import Grudr from 'meteor/grudr:lib';
import React from 'react';
import PropTypes from 'prop-types';

const FlashMessages = (props, {flash}) => {
  return (
    <div className="flash-messages">
      {flash.map((message, index) => <Grudr.components.Flash key={index} alert={message} />)}
    </div>
  );
}

FlashMessages.contextTypes = {
  flash: PropTypes.array,
}

Grudr.registerComponent('FlashMessages', FlashMessages);
