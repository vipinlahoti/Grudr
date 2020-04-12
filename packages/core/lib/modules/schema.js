import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import Grudr from './config.js';

/**
 * @summary Global schemas object. Note: not reactive, won't be updated after initialization
 * @namespace Grudr.schemas
 */
Grudr.schemas = {};

SimpleSchema.prototype.getProfileFields = function () {
  var schema = this._schema;
  var fields = _.filter(_.keys(schema), function (fieldName) {
    var field = schema[fieldName];
    return !!field.profile;
  });
  return fields;
};
