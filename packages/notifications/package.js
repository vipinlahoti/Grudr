Package.describe({
  name: 'grudr:notifications',
  summary: 'Grudr notifications package',
  version: '0.0.1'
});

Package.onUse(function (api) {
  api.versionsFrom('1.10.1');

  api.use([
    'grudr:core',
    'grudr:email',
    'grudr:users'
  ]);

  api.addFiles([
    'lib/notifications.js',
    'lib/custom_fields.js'
  ], ['client', 'server']);

});
