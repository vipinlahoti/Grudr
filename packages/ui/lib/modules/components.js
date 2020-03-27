import Grudr from 'meteor/grudr:core';

// Common
Grudr.registerComponent('Layout', require('../components/common/Layout.jsx'));
Grudr.registerComponent('Logo', require('../components/common/Logo.jsx'));
Grudr.registerComponent('Footer', require('../components/common/Footer.jsx'));
Grudr.registerComponent('Header', require('../components/common/Header.jsx'));

// Pages
Grudr.registerComponent('HomePage', require('../components/pages/HomePage.jsx'));
Grudr.registerComponent('LoginPage', require('../components/pages/LoginPage.jsx'));
Grudr.registerComponent('RegisterPage', require('../components/pages/RegisterPage.jsx'));
