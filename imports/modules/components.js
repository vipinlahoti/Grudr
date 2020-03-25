import Grudr from './core/config';

// Core
Grudr.registerComponent('ScrollToTop', require('../ui/components/core/ScrollToTop.jsx'));
Grudr.registerComponent('Loading', require('../ui/components/core/Loading.jsx'));
Grudr.registerComponent('Icon', require('../ui/components/core/Icon.jsx'));
Grudr.registerComponent('HeadTags', require('../ui/components/core/HeadTags.jsx'));
Grudr.registerComponent('Error404', require('../ui/components/core/Error404.jsx'));

// Common
Grudr.registerComponent('Layout', require('../ui/components/common/Layout.jsx'));
Grudr.registerComponent('Logo', require('../ui/components/common/Logo.jsx'));
Grudr.registerComponent('Footer', require('../ui/components/common/Footer.jsx'));
Grudr.registerComponent('Header', require('../ui/components/common/Header.jsx'));

// Pages
Grudr.registerComponent('HomePage', require('../ui/components/pages/HomePage.jsx'));
Grudr.registerComponent('LoginPage', require('../ui/components/pages/LoginPage.jsx'));
Grudr.registerComponent('RegisterPage', require('../ui/components/pages/RegisterPage.jsx'));
