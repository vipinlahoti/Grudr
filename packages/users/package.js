Package.describe({
  name: 'grudr:users',
  summary: 'Grudr permissions package',
  version: '0.0.1'
});

Package.onUse(function (api) {
  api.versionsFrom('1.10.1');

  api.use([
    'grudr:lib@0.0.1',
    'grudr:email@0.0.1'
  ]);
  
  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');
});
