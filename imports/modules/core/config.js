/**
 * @summary Kick off the namespace for Grudr.
 * @namespace Grudr
 */

// eslint-disable-next-line no-undef
Grudr = {};

// eslint-disable-next-line no-undef
Grudr.VERSION = '0.0.1';

// Components
Grudr.components = {};

// Register Component
Grudr.registerComponent = (name, component) => {
  Grudr.components[name] = component;
};

Grudr.getComponent = (name) => {
  return Grudr.components[name];
};

// Routes
Grudr.routes = {}

// Head Tags
Grudr.headtags = {
  meta: [],
  link: []
}

// Statuses
Grudr.statuses = [
  {
    value: 1,
    label: 'pending'
  },
  {
    value: 2,
    label: 'approved'
  },
  {
    value: 3,
    label: 'rejected'
  },
  {
    value: 4,
    label: 'spam'
  },
  {
    value: 5,
    label: 'deleted'
  }
];

// eslint-disable-next-line no-undef
export default Grudr;
