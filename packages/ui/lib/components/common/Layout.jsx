import React, { Component } from 'react';
import Grudr from 'meteor/grudr:core';

class Layout extends Component {
  render() {
    console.log('Grudr', Grudr);

    return (
      <div className="wrapper" id="wrapper">
        <Grudr.components.Header/>
        
        {this.props.children}

        <Grudr.components.Footer/>        
      </div>
    )
  }
}

module.exports = Layout;
