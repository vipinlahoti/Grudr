Package.describe({
  name: 'grudr:ui',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.10.1');

  api.use([
    'grudr:core',
  ]);
  
  api.addFiles([
    'lib/modules/template-modules.js',
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/components/common/logo.js',
    'lib/client/components/common/header.js',
    'lib/client/components/common/top_nav.js',
    'lib/client/components/common/footer.js',
    'lib/client/components/common/hero_banner.js',

    'lib/client/components/users/user_top_menu.js',

    'lib/styles/main.scss'
  ], 'client');

  // api.export(['Grudr', '_']);

});
