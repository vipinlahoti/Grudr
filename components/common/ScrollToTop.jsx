import Grudr from 'meteor/grudr:lib';
import React, { Component } from 'react';
import { withRouter } from 'react-router';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

Grudr.registerComponent('ScrollToTop', withRouter(ScrollToTop));
