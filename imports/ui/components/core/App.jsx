import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider, intlShape } from 'react-intl';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import moment from 'moment';


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
    console.log(Grudr);
    const routeNames = Grudr.routes.routes;
    console.log(
      routeNames.map(route => (
              <Route {...route} />
            ))
      )

    return (
      <BrowserRouter>
        <IntlProvider
          locale={this.getLocale()}
          key={this.getLocale()}
          messages={Grudr.strings[this.getLocale()]}>
          <Grudr.components.ScrollToTop />

          <Switch>
            {routeNames.map(route => (
              <Route {...route} />
            ))}
          </Switch>
            {/* TODO: Fix SideEffect(NullComponent) Error
            <Grudr.components.HeadTags /> */}

            {/*<Grudr.components.Layout/>*/}
        </IntlProvider>
      </BrowserRouter>
    );
  }
}


App.propTypes = {
  messages: PropTypes.object,
}

App.childContextTypes = {
  // intl: intlShape,
  getLocale: PropTypes.func,
};

export default App;
