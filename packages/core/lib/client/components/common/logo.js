import './logo.html';
import Grudr from '../../../modules';

Template.logo.helpers({
  logoUrl() {
    return Grudr.settings.get('logoUrl');
  }
});
