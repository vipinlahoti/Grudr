import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';

import Grudr from '/imports/modules/core/config';


class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>

        <Helmet>
          <link name="font-awesome" rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <link name="font-face" rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500,700|Open+Sans:300,400,600|Material+Icons"/>
        </Helmet>

        <Grudr.components.Header/>

        <Grudr.components.Hello/>

        <Grudr.components.Footer />
        
      </React.Fragment>
    );
  }
}

export default App;
