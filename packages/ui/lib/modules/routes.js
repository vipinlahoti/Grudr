import Grudr from 'meteor/grudr:lib';

Grudr.routes.add([
  {name: 'home',              path: '/',                 component: Grudr.components.HomePage},
  {name: 'login',             path: '/login',            component: Grudr.components.LoginPage},
  {name: 'register',          path: '/register',         component: Grudr.components.RegisterPage},
  {name: 'forgot-password',   path: '/forgot-password',  component: Grudr.components.ForgotPassword},
  {name: 'hosting',   path: '/hosting',  component: Grudr.components.HostingPage},
  {name: 'domains',   path: '/domains',  component: Grudr.components.DomainsPage},

]);
