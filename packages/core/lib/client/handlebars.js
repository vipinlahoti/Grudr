import Grudr from '../modules';

// ** Handlebars helpers **
Template.registerHelper('log', function(context){
  console.log(context);
});

Template.registerHelper('formatDate', function(datetime, format) {
  Session.get('momentLocale'); // depend on session variable to reactively rerun the helper
  return moment(datetime).format(format);
});

Template.registerHelper('timeAgo', function(datetime) {
  Session.get('momentLocale'); // depend on session variable to reactively rerun the helper
  return moment(datetime).fromNow();
});

Template.registerHelper('sanitize', function(content) {
  console.log('cleaning up…');
  console.log(content);
  return Grudr.utils.cleanUp(content);
});

Template.registerHelper('pluralize', function(count, string) {
  string = count === 1 ? string : string + 's';
  return i18n.t(string);
});

Template.registerHelper('icon', function(iconName, iconClass) {
  return Grudr.utils.getIcon(iconName, iconClass);
});

Template.registerHelper('moduleClass', function() {
  // to get the module class from within a module, we go back up 
  // four steps to access the zone data
  var zoneData = Template.parentData(4);
  if (zoneData) {
    // node: modules may not always be included from within a zone
    var moduleClass = zoneData.zone + "-module ";
    if (zoneData.moduleClass) {
      moduleClass += zoneData.moduleClass;
    }
    return moduleClass;
  }
});

Template.registerHelper('getSetting', function(setting, defaultArgument){
  // if there is no default argument, defaultArgument will be a Spacebars.kw object; so set it to undefined
  // see http://stackoverflow.com/questions/27755891/meteor-what-is-spacebars-kw-hash-object
  const defaultArg = !!defaultArgument.hash ? undefined : defaultArgument;
  setting = Grudr.settings.get(setting, defaultArg);
  return setting;
});
