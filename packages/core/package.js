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
    'blaze-html-templates',
    'jquery',
    'reactive-var',
    'tracker',

    'standard-minifier-css',
    'standard-minifier-js',
    'es5-shim',
    'ecmascript',
    'shell-server',
    'server-render',
    'underscore',

    'check',
    'http',
    'email',
    'service-configuration',
    'session',
    'fourseven:scss',

    'kadira:flow-router',
    'kadira:blaze-layout',
    'kadira:dochead',
    'meteorhacks:subs-manager',
    'arillo:flow-router-helpers',
  ]

  api.use(packages);

  api.imply(packages);

  api.addFiles([
    'lib/client/handlebars.js',
    'lib/client/main.html',
    'lib/client/main.js',

    'lib/client/components/common/helloworld_page.js',
    'lib/client/components/common/loader.html',
    'lib/client/components/common/layout.js',
    
    'lib/client/components/modules/modules.js',

    'lib/client/components/errors/loading.js',
    'lib/client/components/errors/not_found.js'
  ], 'client');

  api.export(['Grudr', '_']);

  api.mainModule('lib/server/main.js', 'server');

});





