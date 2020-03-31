Package.describe({
  name: 'grudr:user',
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

    'lib/styles/main.scss'
  ], 'client');

  // api.export(['Grudr', '_']);

});





