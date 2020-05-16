import Grudr from 'meteor/grudr:lib';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class GrudrButton extends Component {

  render() {
    const { type, variant, size, path, icon, children, ...rest } = this.props;
    const btnClass = `btn btn-${variant} btn-${size}`;

    return (
      <React.Fragment>
        {type === 'link' ?
          <Link to={{ pathname: path }} className={btnClass}>
            {children}
            <Grudr.components.Icon name="arrow_forward" />
          </Link>
        :
          <Button variant={variant} size={size} {...rest}>
            {children}
            <Grudr.components.Icon name="arrow_forward" />
          </Button>
        }
      </React.Fragment>
    )
  }
}

Grudr.registerComponent('Button', GrudrButton);
