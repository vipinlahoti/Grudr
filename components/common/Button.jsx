import Grudr from '@grudr';
import React, { Component } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

class GrudrButton extends Component {

  render() {
    const { variant, size, path, icon, children, ...rest } = this.props;
    const btnClass = `btn btn-${variant}`;

    return (
      <React.Fragment>
        {variant === 'link' ?
          <Link href={path}>
            <a className={btnClass}>
              {icon ? <Grudr.components.Icon name={icon} /> : null}
              {children}
            </a>
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
