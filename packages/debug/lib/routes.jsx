import Grudr from 'meteor/grudr:lib';
import Cheatsheet from './components/Cheatsheet.jsx';
import Groups from './components/Groups.jsx';
import Emails from './components/Emails.jsx';

Grudr.routes.add([
  {name: 'cheatsheet', path: '/cheatsheet', component: Cheatsheet},
  {name: 'groups', path: '/groups', component: Groups},
  {name: 'emails', path: '/emails', component: Emails},
]);
