Package.describe({
  name: 'grudr:core',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.10.1');
  
  api.use('accounts-base', { weak: true });

  var packages = [
    'meteor-base',
    'mongo',
    'reactive-var',

    'standard-minifier-css',
    'standard-minifier-js',
    'es5-shim',
    'ecmascript',

    'shell-server',
    'server-render',
    'check',
    'http',

    'underscore',
    'hot-code-push',

    'email',
    'static-html',
    'react-meteor-data',
    'fourseven:scss'
  ]

  api.use(packages);

  api.imply(packages);

  api.export(['Grudr']);

  api.mainModule('lib/client/main.js', 'client');
  api.mainModule('lib/server/main.js', 'server');

});





