import Grudr from './config.js';
import getSlug from 'speakingurl';

/**
 * @summary The global namespace for Grudr utils.
 * @namespace Grudr.utils
 */
Grudr.utils = {};

/**
 * @summary Convert a camelCase string to dash-separated string
 * @param {String} str
 */
Grudr.utils.camelToDash = str => {
  return str
    .replace(/\W+/g, '-')
    .replace(/([a-z\d])([A-Z])/g, '$1-$2')
    .toLowerCase();
};

/**
 * @summary Convert a camelCase string to a space-separated capitalized string
 * See http://stackoverflow.com/questions/4149276/javascript-camelcase-to-regular-form
 * @param {String} str
 */
Grudr.utils.camelToSpaces = str => {
  return str.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){
    return str.toUpperCase();
  });
};

/**
 * @summary Convert an underscore-separated string to dash-separated string
 * @param {String} str
 */
Grudr.utils.underscoreToDash = str => {
  return str.replace('_', '-');
};

/**
 * @summary Convert a dash separated string to camelCase.
 * @param {String} str
 */
Grudr.utils.dashToCamel = str => {
  return str.replace(/(\-[a-z])/g, function($1){
    return $1.toUpperCase().replace('-', '');
  });
};

/**
 * @summary Convert a string to camelCase and remove spaces.
 * @param {String} str
 */
Grudr.utils.camelCaseify = str => {
  str = this.dashToCamel(str.replace(' ', '-'));
  str = str.slice(0,1).toLowerCase() + str.slice(1);
  return str;
};

/**
 * @summary Trim a sentence to a specified amount of words and append an ellipsis.
 * @param {String} s - Sentence to trim.
 * @param {Number} numWords - Number of words to trim sentence to.
 */
Grudr.utils.trimWords = (s, numWords) => {
  if (!s) return s;

  const expString = s.split(/\s+/, numWords);
  if(expString.length >= numWords) return expString.join(' ') + '…';
  return s;
};

/**
 * @summary Trim a block of HTML code to get a clean text excerpt
 * @param {String} html - HTML to trim.
 */
Grudr.utils.trimHTML = (html, numWords) => {
  const text = Grudr.utils.stripHTML(html);
  return Grudr.utils.trimWords(text, numWords);
};

/**
 * @summary Capitalize a string.
 * @param {String} str
 */
Grudr.utils.capitalise = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

Grudr.utils.t = message => {
  const d = new Date();
  console.log('### ' + message + ' rendered at ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()); // eslint-disable-line
};

Grudr.utils.nl2br = str => {
  const breakTag = '<br />';
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
};

Grudr.utils.scrollPageTo = selector => {
  $('body').scrollTop($(selector).offset().top);
};

Grudr.utils.scrollIntoView = selector => {
  if (!document) return;

  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView();
  }
};


//////////////////////////
// URL Helper Functions //
//////////////////////////

/**
 * @summary Returns the user defined site URL or Meteor.absoluteUrl
 */
Grudr.utils.getSiteUrl = () => {
  return Grudr.settings.get('siteUrl', Meteor.absoluteUrl());
};

/**
 * @summary The global namespace for Grudr utils.
 * @param {String} url - the URL to redirect
 */
Grudr.utils.getOutgoingUrl = url => {
  return Grudr.utils.getSiteUrl() + 'out?url=' + encodeURIComponent(url);
};

Grudr.utils.slugify = s => {
  let slug = getSlug(s, {
    truncate: 60
  });

  // can't have posts with an "edit" slug
  if (slug === 'edit') {
    slug = 'edit-1';
  }

  return slug;
};

Grudr.utils.getUnusedSlug = (collection, slug) => {
  let suffix = '';
  let index = 0;

  // handle edge case for Users collection
  const field = collection._name === 'users' ? 'slug' : 'slug';

  // test if slug is already in use
  while (!!collection.findOne({[field]: slug + suffix})) {
    index++;
    suffix = '-' + index;
  }

  return slug + suffix;
};

Grudr.utils.getDomain = url => {
  try {
    return urlObject.parse(url).hostname.replace('www.', '');
  } catch (error) {
    return null;
  }
};

Grudr.utils.invitesEnabled = () => {
  return Grudr.settings.get('requireViewInvite') || Grudr.settings.get('requirePostInvite');
};

// add http: if missing
Grudr.utils.addHttp = url => {
  try {
    if (url.substring(0, 5) !== 'http:' && url.substring(0, 6) !== 'https:') {
      url = 'http:' + url;
    }
    return url;
  } catch (error) {
    return null;
  }
};

/////////////////////////////
// String Helper Functions //
/////////////////////////////

Grudr.utils.cleanUp = s => {
  return Grudr.utils.stripHTML(s);
};


Grudr.utils.stripHTML = s => {
  return s.replace(/<(?:.|\n)*?>/gm, '');
};

// http://stackoverflow.com/questions/2631001/javascript-test-for-existence-of-nested-object-key
Grudr.utils.checkNested = function(obj /*, level1, level2, ... levelN*/) {
  const args = Array.prototype.slice.call(arguments);
  obj = args.shift();

  for (var i = 0; i < args.length; i++) {
    if (!obj.hasOwnProperty(args[i])) {
      return false;
    }
    obj = obj[args[i]];
  }
  return true;
};

Grudr.log = function (s) {
  if(Grudr.settings.get('debug', false) || process.env.NODE_ENV === 'development') {
    console.log(s); // eslint-disable-line
  }
};

// see http://stackoverflow.com/questions/8051975/access-object-child-properties-using-a-dot-notation-string
Grudr.getNestedProperty = (obj, desc) => {
  const arr = desc.split('.');
  while(arr.length && (obj = obj[arr.shift()]));
  return obj;
};

// see http://stackoverflow.com/a/14058408/649299
_.mixin({
  compactObject(object) {
    var clone = _.clone(object);
    _.each(clone, function(value, key) {
      if(!value && typeof value !== "boolean") {
        delete clone[key];
      }
    });
    return clone;
  }
});

// adapted from http://stackoverflow.com/a/22072374/649299
Grudr.utils.unflatten = ( array, idProperty, parentIdProperty, parent, tree ) => {

  tree = typeof tree !== 'undefined' ? tree : [];
  let children = [];

  if (typeof parent === 'undefined') {
    // if there is no parent, we're at the root level
    // so we return all root nodes (i.e. nodes with no parent)
    children = _.filter( array, node => !node[parentIdProperty]);
  } else {
    // if there *is* a parent, we return all its child nodes
    // (i.e. nodes whose parentId is equal to the parent's id.)
    children = _.filter( array, node => node[parentIdProperty] === parent[idProperty]);
  }

  // if we found children, we keep on iterating
  if (!!children.length) {

    if (typeof parent === 'undefined') {
      // if we're at the root, then the tree consist of all root nodes
      tree = children;
    } else {
      // else, we add the children to the parent as the "childrenResults" property
      parent.childrenResults = children;
    }

    // we call the function on each child
    children.forEach(child => {
      Grudr.utils.unflatten(array, idProperty, parentIdProperty, child);
    });
  }

  return tree;
}

Grudr.utils.getFieldLabel = (fieldName, collection) => {
  const label = collection.simpleSchema()._schema[fieldName].label;
  const nameWithSpaces = Grudr.utils.camelToSpaces(fieldName.replace('grudr.', ''));
  return label || nameWithSpaces;
};

Grudr.utils.getLogoUrl = () => {
  const logoUrl = Grudr.settings.get('logoUrl');
  if (!!logoUrl) {
    const prefix = Grudr.utils.getSiteUrl().slice(0,-1);
    // the logo may be hosted on another website
    return logoUrl.indexOf('://') > -1 ? logoUrl : prefix + logoUrl;
  }
};
