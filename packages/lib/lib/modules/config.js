/**
 * @summary Kick off the namespace for Grudr.
 * @namespace Grudr
 */

// eslint-disable-next-line no-undef
Grudr = {};

// Components
Grudr.components = {};

// Register Component
Grudr.registerComponent = (name, component) => {
  Grudr.components[name] = component;
};

/**
* @summary Routes namespace
* @namespace Grudr.routes
* @method Add a Routes to routes Array
* @param {object} routes - Array of Objects
*/
Grudr.routes = {
  routes: [],
  add(Routes) {
    const addedRoutes = Array.isArray(Routes) ? Routes : [Routes];
    this.routes = this.routes.concat(addedRoutes);
  }
};


/**
* @summary Subscriptions namespace
* @namespace Grudr.subscriptions
*/
Grudr.subscriptions = [];

/**
 * @summary Add a subscription to be preloaded
 * @param {string} subscription - The name of the subscription
 */
Grudr.subscriptions.preload = function (subscription, args) {
  Grudr.subscriptions.push({name: subscription, arguments: args});
};


// Head Tags
Grudr.headtags = {
  meta: [],
  link: [],
  script: [],
};

// eslint-disable-next-line no-undef
export default Grudr;
