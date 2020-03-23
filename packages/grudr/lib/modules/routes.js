import { addRoute } from 'meteor/vulcan:core';

addRoute([
  // pages
  {name: 'dashboard',        path: '/dashboard',             componentName: 'DashboardPage'},
  {name: 'questions',        path: '/questions',             componentName: 'QuestionsPage'},

  {name: 'home',             path: '/',                      componentName: 'HomePage'},
  {name: 'login',            path: '/login',                 componentName: 'LoginPage'},
  {name: 'register',         path: '/register',              componentName: 'RegisterPage'},

  // Posts
  {name: 'posts.top',        path: '/articles',                 componentName: 'PostsHome'},
  {name: 'posts.new',        path: '/new',                   componentName: 'PostsHome'}, 
  {name: 'posts.best',       path: '/best',                  componentName: 'PostsHome'},
  {name: 'posts.category',   path: '/category/:slug',        componentName: 'PostsCategory'},
  {name: 'posts.single',     path: '/posts/:_id/:slug?',     componentName: 'PostsPage'},
  
  // Users
  {name: 'users.profile',    path: '/users/:slug',           componentName: 'UsersProfile'},
  {name: 'users.account',    path: '/account',               componentName: 'UsersAccount'},
  {name: 'users.edit',       path: '/users/:slug/edit',      componentName: 'UsersEdit'},

  // Admin
  {name: 'admin.categories', path: '/admin/categories',      componentName: 'AdminCategories'},
  {name: 'admin.comments',   path: '/admin/comments',        componentName: 'AdminComments'},
  {name: 'admin.posts',      path: '/admin/posts',           componentName: 'AdminPosts'},
  {name: 'admin.users',      path: '/admin/users',           componentName: 'AdminUsers'},

]);
