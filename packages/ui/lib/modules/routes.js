import Grudr from 'meteor/grudr:lib';

Grudr.routes.add([
  {name: 'home', path: '/', component: Grudr.components.HomePage},
  
  {name: 'login', path: '/login', component: Grudr.components.LoginPage},
  {name: 'register', path: '/register', component: Grudr.components.RegisterPage},


  // Accounts
  {name: 'dashboard', path: '/dashboard', component: Grudr.components.DashboardPage},
]);
