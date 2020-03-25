import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';

import Grudr from '/imports/modules/core/config';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('Grudr: ', Grudr);
    return (
      <React.Fragment>



        <Grudr.components.Header/>

        <Grudr.components.Hello/>

        <Grudr.components.Footer/>        
        
      </React.Fragment>
    );
  }
}

export default App;
