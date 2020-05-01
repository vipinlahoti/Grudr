import Grudr from 'meteor/grudr:lib';
import { withTracker } from 'meteor/react-meteor-data';
import React, { PureComponent } from 'react';
import { Redirect } from 'react-router'
import PropTypes from 'prop-types';
import { IntlProvider, intlShape } from 'react-intl';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
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
      }
    />
  );
};

class App extends PureComponent {

  /*
   * Clear messages on route change
   * See https://stackoverflow.com/a/45373907/649299
   */
  UNSAFE_componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      this.clear();
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  /*
   * Clear all flash messages
   */
  clear = () => {
    // this.props.flash = [];
  };

  getLocale() {
    return Grudr.settings.get('locale');
  }

  getChildContext() {
    // const { intl } = intlProvider.getChildContext();

    // This return will keep keep these props as context
    return {
      getLocale: this.getLocale,
      currentUser: this.props.currentUser,
      actions: this.props.actions,
      messages: this.props.messages,
      flash: this.props.flash
    };
  }

  render() {
    const routeNames = Grudr.routes.routes;
    const currentRoute = this.props.location.pathname;
    
    if (Meteor.isClient) {
      if ((Meteor.user() && currentRoute === '/login') || (Meteor.user() && currentRoute === '/register')) {
        return (<Redirect to='/dashboard' />)
      }
    }

    return (
      <IntlProvider
        locale={this.getLocale()}
        key={this.getLocale()}
        messages={Grudr.strings[this.getLocale()]}
      >
        <Grudr.components.ScrollToTop />
        <Grudr.components.HeadTags />
        
        {this.props.ready ?
          <React.Fragment>
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
          </React.Fragment>
        : <Grudr.components.Loading /> }

      </IntlProvider>
    );
  }
}

App.propTypes = {
  ready: PropTypes.bool,
  currentUser: PropTypes.object,
  actions: PropTypes.object,
  messages: PropTypes.object,
  flash: PropTypes.array,
};

App.childContextTypes = {
  currentUser: PropTypes.object,
  actions: PropTypes.object,
  messages: PropTypes.object,
  flash: PropTypes.array,
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
      flash: Messages.collection.find({show: true}).fetch(),
    }

    if (!subscriptions.length || _.every(subscriptions, handle => handle.ready())) {
      data.ready = true;
    } else {
      data.ready = false;
    }
  }

  return data;
})(App);

const MainAppContainer = withRouter(AppContainer)

Grudr.registerComponent('App', MainAppContainer);
