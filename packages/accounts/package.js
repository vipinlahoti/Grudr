Package.describe({
  name: 'grudr:accounts',
  version: '0.0.1'
})

Package.onUse(api => {
  api.versionsFrom('1.10.1');

  api.use([
    'ecmascript',
    'check',
    'accounts-base',
    'accounts-password',
    'accounts-facebook',
    'accounts-google',
  ], ['client', 'server']);

  api.use('service-configuration', { weak: true });
  api.use('http', 'server');

  api.mainModule('lib/index.js', ['client', 'server'])
})
