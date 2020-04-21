import Grudr from 'meteor/grudr:lib';

Grudr.routes.add([
  {name: 'home',           path: '/',           component: Grudr.components.HomePage},

  // Accounts  
  {name: 'login',          path: '/login',      component: Grudr.components.LoginPage},
  {name: 'register',       path: '/register',   component: Grudr.components.RegisterPage},

  // Users
  {name: 'dashboard',      path: '/dashboard',      component: Grudr.components.DashboardPage},
  {name: 'users.single',   path:'/users/:slug',     component: Grudr.components.UserProfile},
  {name: 'users.edit',     path:'/users/:slug/edit', component: Grudr.components.UserEdit},

]);
