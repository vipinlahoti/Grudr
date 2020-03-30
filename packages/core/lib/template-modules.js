import Grudr from './modules';

// add template module to the hero zone
Grudr.modules.add("hero", {
  template: 'hero_banner',
  order: 1,
  only: ['helloworld_page']
});

// TODO: 
// Dynamic Pages to router
// Grudr.modules.add("primaryNav", {
//   template: "pages_menu",
//   order: 1
// });

Grudr.modules.add("secondaryNav", {
  template: "user_menu",
  order: 1
});
