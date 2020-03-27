import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import Grudr from '../config';

class GrudrButton extends Component {

  render() {
    const { variant, size, path, icon, children, ...rest } = this.props;
    const btnClass = `btn btn-${variant}`;

    return (
      <React.Fragment>
        {variant === 'link' ?
          <Link to={{ pathname: path }} className={btnClass}>
            {icon ? <Grudr.components.Icon name={icon} /> : null}
            {children}
          </Link>
        :
          <Button variant={variant} size={size} {...rest}>
            {icon ? <Grudr.components.Icon name={icon} /> : null}
            {children}
          </Button>
        }
      </React.Fragment>
    )
  }
}

Grudr.registerComponent('Button', GrudrButton);
