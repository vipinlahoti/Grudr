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
        <React.Fragment>
          <Grudr.components.Layout {...props}>
            <Component {...props} />
          </Grudr.components.Layout>
        </React.Fragment>
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
    console.log('this.props: ', this.props.ready);

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
  ready: PropTypes.bool,
  currentUser: PropTypes.object,
  actions: PropTypes.object,
  messages: PropTypes.object
};

App.childContextTypes = {
  currentUser: PropTypes.object,
  actions: PropTypes.object,
  messages: PropTypes.object,
  // intl: intlShape,
  getLocale: PropTypes.func,
};

const AppContainer = withTracker(() => {
  let subscriptions;
  let data;

  if (Meteor.isClient) {
    subscriptions = Grudr.subscriptions.map((sub) => Meteor.subscribe(sub.name, sub.arguments));

    data = {
      currentUser: Meteor.user(),
      actions: {call: Meteor.call},
      messages: Messages,
      ready: null,
    }
  }

  console.log('subscriptions: ', subscriptions);
  console.log('data: ', data);

  // if (!subscriptions.length || _.every(subscriptions, handle => handle.ready())) {
  //   data.ready = true;
  //   console.log('if subscriptions: ', subscriptions);
  // } else {
  //   console.log('else subscriptions: ', subscriptions);
  //   data.ready = false;
  // }

  // if ((subscriptions && subscriptions.ready()) || Meteor.isServer) {
  //   // data.ready = false;
  //   console.log('data: ', data);
  //   // returnObj.data = SomeCollection.findOne({ some: 'condition' });
  // }

  return data;
})(App);

Grudr.registerComponent('App', AppContainer);
