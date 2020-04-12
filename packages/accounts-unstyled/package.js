Package.describe({
  summary: 'Semantic UI Components for Useraccounts-React',
  version: '1.0.0',
  name: 'grudr:accounts-unstyled',
  git: 'https://github.com/royGil/useraccounts-react.git'
})

Package.onUse(api => {
  api.versionsFrom('1.6.1')

  api.use('ecmascript')
  api.mainModule('index.js', ['client', 'server'])
})
