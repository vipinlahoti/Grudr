import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider, intlShape } from 'react-intl';

import Grudr from '/imports/modules/core/config';

class App extends PureComponent {

  getLocale() {
    return Grudr.settings.get('locale');
  }

  getChildContext() {
    return {
      getLocale: this.getLocale
    };
  }

  render() {
    console.log(Grudr)

    return (
      <IntlProvider
        locale={this.getLocale()}
        messages={Grudr.strings[this.getLocale()]}>
        <Grudr.components.ScrollToTop />
        {/* TODO: Fix SideEffect(NullComponent) Error
        <Grudr.components.HeadTags /> */}
        <Grudr.components.Layout/>
      </IntlProvider>
    );
  }
}


App.propTypes = {
  // messages: PropTypes.object,
}

App.childContextTypes = {
  // intl: intlShape,
  getLocale: PropTypes.func,
};

export default App;
