import Grudr from 'meteor/grudr:lib';
import { withTracker } from 'meteor/react-meteor-data';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

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

  getChildContext() {
    return {
      currentUser: this.props.currentUser
    };
  }

  render() {
    const routeNames = Grudr.routes.routes;

    return (
      <React.Fragment>
        <Grudr.components.ScrollToTop />
        <Grudr.components.HeadTags />

        {routeNames.length ? (
          <TransitionGroup className="transition-group">
            <CSSTransition
              timeout={{ enter: 300, exit: 300 }}
              classNames="fade"
            >
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
            </CSSTransition>
          </TransitionGroup>)
        : ( <Grudr.components.HelloWorld /> )}

      </React.Fragment>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.object
};

App.childContextTypes = {
  currentUser: PropTypes.object
};

// const AppContainer = withTracker(() => {
//   let data;

//   if (Meteor.isClient) {
//     data = {
//       currentUser: Meteor.user()
//     }
//   }

//   return data;
// })(App);

Grudr.registerComponent('App', withRouter(App));
