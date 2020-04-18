import Grudr from 'meteor/grudr:lib';
import { withTracker } from 'meteor/react-meteor-data';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider, /* intlShape */ } from 'react-intl';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Messages from '../messages.js';

const RouteWithLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render = {props =>
      <Grudr.components.Layout {...props}>
        <Component {...props} />
      </Grudr.components.Layout>
    } />
  );
};

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
    const routeNames = Grudr.routes.routes;

    // const data = {
    //   // currentUser: Meteor.user(),
    //   messages: Messages
    // }

    // console.log('subscriptions: ', subscriptions);
    // console.log('data: ', data);

    return (
      <IntlProvider
        locale={this.getLocale()}
        key={this.getLocale()}
        messages={Grudr.strings[this.getLocale()]}
      >
        <Grudr.components.ScrollToTop />
        <Grudr.components.HeadTags />
        {routeNames.length ? (
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
          </Switch> )
        : ( <Grudr.components.HelloWorld /> )}
      </IntlProvider>
    );
  }
}

App.propTypes = {
  messages: PropTypes.object,
};

App.childContextTypes = {
  // intl: intlShape,
  getLocale: PropTypes.func,
};

const AppContainer = withTracker(() => {
  // const subscriptions = Grudr.subscriptions.map((sub) => Meteor.subscribe(sub.name, sub.arguments));
  // console.log('subscriptions: ', subscriptions);

  return {
  };
})(App);

Grudr.registerComponent('App', AppContainer);
