import React, { PureComponent } from 'react';
import Grudr from '/imports/modules/core/config';

class App extends PureComponent {

  render() {
    return (
      <React.Fragment>
        <Grudr.components.ScrollToTop />
        {/* TODO: Fix SideEffect(NullComponent) Error
        <Grudr.components.HeadTags /> */}
        <Grudr.components.Layout/>
      </React.Fragment>
    );
  }
}

export default App;
