// import Grudr from './modules';

Grudr.modules.add("header", {
  template: "header",
  order: 1
});

Grudr.modules.add("footer", {
  template: "footer",
  order: 1
});

// add template module to the hero zone
Grudr.modules.add("hero", {
  template: 'hero_banner',
  order: 1,
  only: ['helloworld_page']
});

// Dynamic Pages to router
Grudr.modules.add("primaryNav", {
  template: "top_nav",
  order: 1
});
