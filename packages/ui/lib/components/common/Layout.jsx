import Grudr from 'meteor/grudr:lib';
import { withTracker } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Layout extends Component {
  render() {
    return (
      <div className="wrapper" id="wrapper">
        { this.context.currentUser ? <Grudr.components.UserProfileCheck /> : null }

        <Grudr.components.Header />
        <Grudr.components.FlashMessages />
        {this.props.children}
        <Grudr.components.Footer />        
      </div>
    )
  }
}

Layout.contextTypes = {
  currentUser: PropTypes.object,
};

Grudr.registerComponent('Layout', Layout);
