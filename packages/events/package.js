Package.describe({
  name: 'grudr:events',
  summary: 'Grudr event tracking package',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.10.1');

  api.use([
    'grudr:core',
  ]);

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');

  api.export(['Events']);

});
