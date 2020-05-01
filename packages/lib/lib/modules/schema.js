import SimpleSchema from 'simpl-schema';
import Grudr from './config.js';

/**
 * @summary Global schemas object. Note: not reactive, won't be updated after initialization
 * @namespace Grudr.schemas
 */
Grudr.schemas = {};

SimpleSchema.extendOptions([
  'private',
  'editable',
  'hidden',
  'required',
  'mustComplete',
  'profile',
  'template',
  'form',
  'autoform',
  'control',
  'order',
  'group',

  'insertableIf',
  'editableIf',
  'publish',

]);

SimpleSchema.prototype.getProfileFields = function () {
  const schema = this._schema;
  const fields = _.filter(Object.keys(schema), function (fieldName) {
    const field = schema[fieldName];
    return !!field.profile;
  });
  return fields;
};
