import Grudr from './config.js';

/**
 * Meteor Collections.
 * @class Mongo.Collection
 */

/**
 * Add an additional field (or an array of fields) to a schema.
 * @param {Object|Object[]} field
 */
Mongo.Collection.prototype.addField = function (fieldOrFieldArray) {

  const fieldSchema = {};
  const fieldArray = Array.isArray(fieldOrFieldArray) ? fieldOrFieldArray : [fieldOrFieldArray];

  // loop over fields and add them to schema
  fieldArray.forEach(function (field) {
    fieldSchema[field.fieldName] = field.fieldSchema;
  });

  // add field schema to collection schema
  this.attachSchema(fieldSchema);
};

/**
 * Remove a field from a schema.
 * @param {String} fieldName
 */
Mongo.Collection.prototype.removeField = function (fieldName) {
  const schema = _.omit(this.simpleSchema()._schema, fieldName);

  // add field schema to collection schema
  this.attachSchema(schema, {replace: true});
};

/**
 * Check if an operation is allowed
 * @param {Object} collection – the collection to which the document belongs
 * @param {string} userId – the userId of the user performing the operation
 * @param {Object} document – the document being modified
 * @param {string[]} fieldNames – the names of the fields being modified
 * @param {Object} modifier – the modifier
 */
Grudr.allowCheck = function (collection, userId, document, fieldNames, modifier) {

  const schema = collection.simpleSchema();
  const user = Meteor.users.findOne(userId);
  const allowedFields = schema.getEditableFields(user);
  const fields = [];

  // fieldNames only contains top-level fields, so loop over modifier to get real list of fields
  _.each(modifier, function (operation) {
    fields = fields.concat(_.keys(operation));
  });

  // allow update only if:
  // 1. user has rights to edit the document
  // 2. there is no fields in fieldNames that are not also in allowedFields
  return Users.can.edit(userId, document) && _.difference(fields, allowedFields).length == 0;

};

// Note: using the prototype doesn't work in allow/deny for some reason
Meteor.Collection.prototype.allowCheck = function (userId, document, fieldNames, modifier) {
  Grudr.allowCheck(this, userId, document, fieldNames, modifier);
};

