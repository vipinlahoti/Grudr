import SimpleSchema from 'simpl-schema';
import Grudr from './config.js';

/**
 * @summary Global schemas object. Note: not reactive, won't be updated after initialization
 * @namespace Grudr.schemas
 */
Grudr.schemas = {};

SimpleSchema.extendOptions({
  private: Match.Optional(Boolean),
  editable: Match.Optional(Boolean),  // editable: true means the field can be edited by the document's owner
  hidden: Match.Optional(Boolean),     // hidden: true means the field is never shown in a form no matter what
  required: Match.Optional(Boolean), // required: true means the field is required to have a complete profile
  profile: Match.Optional(Boolean), // profile: true means the field is shown on user profiles
  template: Match.Optional(String), // template used to display the field
  form: Match.Optional(Object), // form placeholder
  autoform: Match.Optional(Object), // legacy form placeholder; backward compatibility
  control: Match.Optional(Match.Any), // NovaForm control (String or React component)
  order: Match.Optional(Number), // position in the form
  group: Match.Optional(Object), // form fieldset group

  insertableIf: Match.Optional(Boolean), // true means this field can be insertable
  editableIf: Match.Optional(Boolean), // true means this field can be editable
  publish: Match.Optional(Boolean), // true means this field is published

});

SimpleSchema.prototype.getProfileFields = function () {
  var schema = this._schema;
  var fields = _.filter(_.keys(schema), function (fieldName) {
    var field = schema[fieldName];
    return !!field.profile;
  });
  return fields;
};
