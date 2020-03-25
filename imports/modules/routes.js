import Grudr from './core/config';

Grudr.routes.add([
  {name: 'home', path: '/', component: Grudr.components.HomePage},
  {name: 'error', path: '/error', component: Grudr.components.Error404},
]);
