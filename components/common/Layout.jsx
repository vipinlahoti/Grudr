import Grudr from '@grudr';
import React, { Component } from 'react';
import Head from 'next/head';

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Grudr.components.HeadTags />

        <Grudr.components.Header />
        {this.props.children}
        <Grudr.components.Footer />
      </React.Fragment>
    )
  }
}

Grudr.registerComponent('Layout', Layout);
