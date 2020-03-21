import React from 'react';
import Button from 'react-bootstrap/Button';
import { Components, registerComponent } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const BootstrapButton = ({ children, variant, size, iconButton, type, path, ...rest }) => {
  const className = `btn btn-${variant}`;

  return (
    <React.Fragment>
    { type === 'link' ?
      <Link to={{ pathname: path }} className={className} size={size} {...rest}>
        { iconButton ? <Components.Icon name={iconButton}/> : null }
        {children}
      </Link>
    :
      <Button variant={variant} size={size} {...rest}>
        { iconButton ? <Components.Icon name={iconButton}/> : null }
        {children}
      </Button>
    }   
    </React.Fragment>
  )
}
registerComponent('Button', BootstrapButton);
