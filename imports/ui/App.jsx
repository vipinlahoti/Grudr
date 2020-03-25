import React, { PureComponent } from 'react';
import Grudr from '/imports/modules/core/config';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>

        <Grudr.components.HeadTags />

        <Grudr.components.Header/>

        <Grudr.components.Hello/>

        <Grudr.components.Footer/>        
        
      </React.Fragment>
    );
  }
}

export default App;
