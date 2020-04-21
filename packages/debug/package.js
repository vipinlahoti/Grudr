Package.describe({
  name: 'grudr:debug',
  summary: 'Grudr debug package',
  version: '0.0.1'
});

Package.onUse(function (api) {
  api.versionsFrom('1.10.1');

  api.use([
    'fourseven:scss@4.12.0',

    // grudr packages
    'grudr:core',
    'grudr:users',
    'grudr:email'
  ]);

  api.addFiles([
    'lib/stylesheets/debug.scss'
  ], ['client']);

  api.addFiles([
    'lib/routes.jsx',
    'lib/globals.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/server/methods.js'
  ], ['server']);

  api.export([
    'Grudr',
    'Users'
  ], ['client', 'server']);
});
