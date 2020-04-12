import Grudr from 'meteor/grudr:core';

Grudr.routes.add([
  {name: 'home', path: '/', component: Grudr.components.HomePage},
  
  {name: 'login', path: '/login', component: Grudr.components.LoginPage},
  {name: 'register', path: '/register', component: Grudr.components.RegisterPage},
]);
