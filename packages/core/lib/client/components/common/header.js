import './header.html';
import Grudr from '../../../modules';

console.log('Grudr.settings', Grudr.settings.get('title'));

Template.header.helpers({
  headerClass() {
    const headerClass = Grudr.settings.get('title');
    return headerClass;
  },

  hasPrimaryNav() {
    return !!Grudr.modules.get('primaryNav').length;
  },

  hasSecondaryNav() {
    return !!Grudr.modules.get("secondaryNav").length;
  }

});
