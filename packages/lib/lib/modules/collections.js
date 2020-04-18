import SimpleSchema from 'simpl-schema';
import Grudr from './config.js';

/**
 * @summary Meteor Collections.
 * @class Mongo.Collection
 */

/**
 * @summary @summary Add an additional field (or an array of fields) to a schema.
 * @param {Object|Object[]} field
 */
Mongo.Collection.prototype.addField = function (fieldOrFieldArray) {

  var collection = this;
  var fieldSchema = {};

  var fieldArray = Array.isArray(fieldOrFieldArray) ? fieldOrFieldArray : [fieldOrFieldArray];

  // loop over fields and add them to schema
  fieldArray.forEach(function (field) {
    fieldSchema[field.fieldName] = field.fieldSchema;
  });

  // add field schema to collection schema
  collection.attachSchema(fieldSchema);
};

/**
 * @summary Remove a field from a schema.
 * @param {String} fieldName
 */
Mongo.Collection.prototype.removeField = function (fieldName) {

  var collection = this;
  var schema = _.omit(collection.simpleSchema()._schema, fieldName);

  // add field schema to collection schema
  collection.attachSchema(schema, {replace: true});
};

/**
 * @summary Get a list of a schema's private fields
 * @namespace Grudr.schemas
 */
Mongo.Collection.prototype.getPrivateFields = function () {
  var schema = this.simpleSchema()._schema;
  var fields = _.filter(_.keys(schema), function (fieldName) {
    var field = schema[fieldName];
    return field.publish !== true;
  });
  return fields;
};


/**
 * @summary Get a list of a schema's public fields
 * @namespace Grudr.schemas
 */
Mongo.Collection.prototype.getPublicFields = function () {
  var schema = this.simpleSchema()._schema;
  var fields = _.filter(_.keys(schema), function (fieldName) {
    var field = schema[fieldName];
    return field.publish === true;
  });
  return fields;
};

Mongo.Collection.prototype.attachSchema = function (schemaOrFields) {
  if (schemaOrFields instanceof SimpleSchema) {
    this.simpleSchema = () => schemaOrFields;
  } else {
    this.simpleSchema().extend(schemaOrFields);
  }
};
