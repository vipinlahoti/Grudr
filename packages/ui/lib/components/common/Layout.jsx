import Grudr from 'meteor/grudr:lib';
import { withTracker } from 'meteor/react-meteor-data';
import React, { Component } from 'react';

class Layout extends Component {
  render() {
    console.log('Grudr: Layout.jsx', Grudr)
    return (
      <div className="wrapper" id="wrapper">
        <Grudr.components.Header />
        {this.props.children}
        <Grudr.components.Footer />        
      </div>
    )
  }
}

Grudr.registerComponent('Layout', Layout);
