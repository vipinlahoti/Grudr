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
    'check',
  ]);

  api.addFiles([
    'lib/datetime.scss'
  ], 'client');

  api.mainModule('lib/export.js', ['client', 'server']);

});
