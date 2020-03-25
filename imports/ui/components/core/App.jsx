import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider, /* intlShape */ } from 'react-intl';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Grudr from '/imports/modules/core/config';

const RouteWithLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render = {props =>
      <Grudr.components.Layout {...props}>
        {/* TODO: Fix SideEffect(NullComponent) Error
        <Grudr.components.HeadTags /> */}
        <Component {...props} />
      </Grudr.components.Layout>
    } />
  );
}

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


    return (
      <BrowserRouter>
        <IntlProvider
          locale={this.getLocale()}
          key={this.getLocale()}
          messages={Grudr.strings[this.getLocale()]}>
          <Grudr.components.ScrollToTop />

          <Switch>
            {routeNames.map((route, i) => (
              <RouteWithLayout
                exact
                key={i}
                {...route}
              />
            ))}
            <RouteWithLayout
              component={Grudr.components.Error404}
            />
          </Switch>
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
