Package.describe({
  name: 'grudr:forms',
  summary: 'Form containers for React',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.10.1');
  
  api.use([
    'fourseven:scss@4.12.0',
    'ecmascript',
  ]);

  api.addFiles([
    'lib/styles/datetime.scss'
  ], 'client');

  api.mainModule('lib/client/main.js', ['client']);
  api.mainModule('lib/server/main.js', ['server']);
});
