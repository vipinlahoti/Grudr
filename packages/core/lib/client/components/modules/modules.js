import Grudr from '../../../modules';
import './modules.html';

Template.modules.helpers({
  isDebug() {
    return Session.get('debug');
  },

  getClass() {
    let zoneClass = 'zone-wrapper ';

    if (this.zoneClass) {
      zoneClass += this.zoneClass;
    }
    else {
      zoneClass += this.zone;
    }
    return zoneClass;
  },

  getId() {
    return this.wrapperId;
  },

  getModules() {
    const modules = this;

    const zoneModules = Grudr.modules.get(modules.zone).map(function (module) {
      // use deep copy to avoid modifying original module when extending it with modules property
      const newModule = jQuery.extend(true, {}, module);
      newModule.modules = modules;
      return newModule;
    });

    console.log('zoneModules', zoneModules)
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

    console.log(data)
    return data;
  }
});
