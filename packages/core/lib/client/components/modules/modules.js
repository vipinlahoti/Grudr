import Grudr from '../../../modules';
import './modules.html';

Template.modules.helpers({
  isDebug() {
    return Session.get('debug');
  },

  getModules() {
    const modules = this;

    const zoneModules = Grudr.modules.get(modules.zone).map(function (module) {
      // use deep copy to avoid modifying original module when extending it with modules property
      const newModule = jQuery.extend(true, {}, module);
      newModule.modules = modules;
      console.log('zoneModules', newModule);

      return newModule;
    });

    return zoneModules;
  },

  showModule() {
    const module = this;

    // if module should only run on specific routes, test for them
    if (module.only) {
      if (Array.isArray(module.only)) {
        return _.contains(module.only, FlowRouter.getRouteName());
      } else {
        return module.only();
      }
    }

    // if module should *not* run on specific routes, test for them
    if (module.except) {
      if (Array.isArray(module.except)) {
        return !_.contains(module.except, FlowRouter.getRouteName());
      } else {
        return module.except();
      }
    }

    return true;
  },

  moduleData() {
    const data = _.extend({
      zone: this.modules.zone,
      moduleClass: this.modules.moduleClass
    }, this.modules.moduleData);
    return data;
  }
});
