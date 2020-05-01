import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Toast } from 'react-bootstrap';

class Flash extends Component{

  componentDidMount() {
    this.context.messages.markAsSeen(this.props.alert._id);
  }

  dismissFlash = e => {
    // e.preventDefault();
    this.context.messages.clear(this.props.alert._id);
    console.log('dismissFlash: ',this.props.alert)
  }

  render() {
    console.log('this.props.alert: ', this.props.alert); 
    let type = this.props.alert.type;
    type = type === 'error' ? 'danger' : type; // if type is "error", use "danger" instead

    return (
      <Toast
        onClose={() => this.dismissFlash()}
        className={`bg-${type}`}
      >
        <Toast.Header>
          {this.props.alert.content}
        </Toast.Header>
      </Toast>
    )
  }
}

Flash.propTypes = {
  alert: PropTypes.object.isRequired
}

Flash.contextTypes = {
  messages: PropTypes.object.isRequired
};

Grudr.registerComponent('Flash', Flash);
