Package.describe({
  name: 'grudr:accounts',
  summary: 'Simple and intuative accounts view layer with react',
  version: '1.2.4',
  documentation: 'README.md',
  git: 'https://github.com/royGil/accounts-react'
})

Package.onUse(api => {
  api.versionsFrom('1.6.1')

  api.use([
    'ecmascript',
    'accounts-base',
    'accounts-password',
    'accounts-facebook',
    'accounts-google',
    'mdg:validated-method@1.1.0',
    'check'
  ], ['client', 'server'])

  api.use('react-meteor-data', 'client')

  api.use('service-configuration', { weak: true })
  api.use('http', 'server')

  api.mainModule('index.js', ['client', 'server'])
})
