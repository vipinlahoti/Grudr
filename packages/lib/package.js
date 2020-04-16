Package.describe({
  name: 'grudr:lib',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.10.1');
  
  var packages = [
    'meteor-base',
    'mongo',
    'tracker',
    'reactive-var',

    'standard-minifier-css',
    'standard-minifier-js',
    'es5-shim',
    'ecmascript',

    'shell-server',
    'server-render',
    'check',
    'http',
    'email',

    'underscore'
  ]

  api.use(packages);

  api.imply(packages);

  api.export('Grudr');

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');
});





