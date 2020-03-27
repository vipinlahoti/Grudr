import Grudr from 'meteor/grudr:core';

const topNavLinks = Grudr.settings.get('topNavLinks');
const getRoutes = [];

topNavLinks.forEach(function (item) {
  getRoutes.push({
    name: item['name'],
    path: item['path'],
    component: item['component'], // TODO: fix this component converting into String
  })
});

Grudr.routes.add(getRoutes);

// Grudr.routes.add([
//   {name: 'home', path: '/', component: Grudr.components.HomePage},
  
//   {name: 'login', path: '/login', component: Grudr.components.LoginPage},
//   {name: 'register', path: '/register', component: Grudr.components.RegisterPage},
// ]);
