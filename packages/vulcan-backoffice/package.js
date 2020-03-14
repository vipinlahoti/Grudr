Package.describe({
  name: 'vulcan:backoffice',
  summary: 'Vulcan automated backoffice generator',
  version: '1.14.1',
  git: 'https://github.com/VulcanJS/Vulcan.git'
});

Package.onUse(api => {
  api.use(['vulcan:core', 'vulcan:i18n']);

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');
});

Package.onTest(function (api) {
  api.use(['ecmascript', 'meteortesting:mocha', 'vulcan:core']);
  api.mainModule('./test/index.js');
});
