import Grudr from './core/config';

Grudr.routes.add([
  {name: 'home', path: '/', component: Grudr.components.HomePage},
  
  {name: 'login', path: '/login', component: Grudr.components.LoginPage},
  {name: 'register', path: '/register', component: Grudr.components.RegisterPage},
  // {name: 'error', path: '/error', component: Grudr.components.Error404},
]);
