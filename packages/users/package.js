Package.describe({
  name: 'grudr:users',
  summary: 'Grudr Users & permissions.',
  version: '0.0.1'
});

Package.onUse(function (api) {
  api.versionsFrom('1.10.1');

  api.use([
    'grudr:lib',
    'grudr:email',
    'grudr:events'
  ]);
  
  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');
});
