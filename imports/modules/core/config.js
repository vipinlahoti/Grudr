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

// Strings can be for i18n
Grudr.strings = {};

// Routes
Grudr.routes = {}

// Head Tags
Grudr.headtags = {
  meta: [],
  link: [],
  script: [],
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
