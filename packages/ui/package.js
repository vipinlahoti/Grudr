Package.describe({
  name: 'grudr:ui',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.10.1');

  api.use([
    'fourseven:scss@4.12.0',
    
    'grudr:core',
    'grudr:accounts',
    'grudr:accounts-unstyled',
    'grudr:email',
    'grudr:events',
  ]);

  api.addFiles([
    'lib/styles/main.scss'
  ], ['client']);

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');
});
