import Grudr from '@grudr';
import Link from 'next/link';
import React from 'react';

const Logo = ({ logoUrl, siteTitle }) => {
  if (logoUrl) {
    return (
      <Link href="/">
        <a className="navbar-brand">
          <img src={logoUrl} alt={siteTitle} />
        </a>
      </Link>
    )
  } else {
    return (
      <Link href="/">
        <a className="navbar-brand">
          {siteTitle}
        </a>
      </Link>
    )
  }
}

Grudr.registerComponent('Logo', Logo);
