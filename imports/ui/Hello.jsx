import React, { Component } from 'react';
import Grudr from '/imports/modules/core/config';

class Hello extends Component {
  state = {
    counter: 0,
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.increment()}>Click Me</button>
        <p>You've pressed the button {this.state.counter} times.</p>
      </div>
    );
  }
}

module.exports = Hello;
