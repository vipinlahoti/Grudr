import Grudr from './config.js';
// import moment from 'moment';

/**
 * @summary Callback hooks provide an easy way to add extra steps to common operations.
 * @namespace Grudr.callbacks
 */
Grudr.callbacks = {};

/**
 * @summary Add a callback function to a hook
 * @param {String} hook - The name of the hook
 * @param {Function} callback - The callback function
 */
Grudr.callbacks.add = function (hook, callback) {

  // if callback array doesn't exist yet, initialize it
  if (typeof Grudr.callbacks[hook] === 'undefined') {
    Grudr.callbacks[hook] = [];
  }

  Grudr.callbacks[hook].push(callback);
};

/**
 * @summary Remove a callback from a hook
 * @param {string} hook - The name of the hook
 * @param {string} functionName - The name of the function to remove
 */
Grudr.callbacks.remove = function (hookName, callbackName) {
  Grudr.callbacks[hookName] = _.reject(Grudr.callbacks[hookName], function (callback) {
    return callback.name === callbackName;
  });
};

/**
 * @summary Successively run all of a hook's callbacks on an item
 * @param {String} hook - First argument: the name of the hook
 * @param {Object} item - Second argument: the post, comment, modifier, etc. on which to run the callbacks
 * @param {Any} args - Other arguments will be passed to each successive iteration
 * @returns {Object} Returns the item after it's been through all the callbacks for this hook
 */
Grudr.callbacks.run = function () {

  // the first argument is the name of the hook
  const hook = arguments[0];
  // the second argument is the item on which to iterate
  const item = arguments[1];
  // successive arguments are passed to each iteration
  const args = Array.prototype.slice.call(arguments).slice(2);

  const callbacks = Grudr.callbacks[hook];

  if (typeof callbacks !== 'undefined' && !!callbacks.length) { // if the hook exists, and contains callbacks to run

    return callbacks.reduce(function(result, callback) {
      // console.log(callback.name);
      // return callback(result, constant);
      const newArguments = [result].concat(args);
      return callback.apply(this, newArguments);
      // uncomment for debugging
      // try {
      //   return callback(result, constant);
      // } catch (error) {
      //   console.log(`// error at callback [${callback.name}] in hook [${hook}]`)
      //   throw error;
      // }
    }, item);

  } else { // else, just return the item unchanged
    return item;
  }
};

/**
 * @summary Successively run all of a hook's callbacks on an item, in async mode (only works on server)
 * @param {String} hook - First argument: the name of the hook
 * @param {Any} args - Other arguments will be passed to each successive iteration
 */
Grudr.callbacks.runAsync = function () {

  // the first argument is the name of the hook
  var hook = arguments[0];
  // successive arguments are passed to each iteration
  var args = Array.prototype.slice.call(arguments).slice(1);
  var callbacks = Grudr.callbacks[hook];

  if (Meteor.isServer && typeof callbacks !== 'undefined' && !!callbacks.length) {

    // use defer to avoid holding up client
    Meteor.defer(function () {
      // run all post submit server callbacks on post object successively
      callbacks.forEach(function(callback) {
        // console.log("// "+hook+": running callback ["+callback.name+"] at "+moment().format("hh:mm:ss"))
        callback.apply(this, args);
      });
    });

  }

};
