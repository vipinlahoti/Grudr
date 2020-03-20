import { addRoute } from 'meteor/vulcan:core';

addRoute([
  // pages
  {name: 'dashboard',        path: '/dashboard',             componentName: 'DashboardPage'},
  {name: 'home',             path: '/',                      componentName: 'HomePage'},

  // posts

  {name: 'posts.top',        path: '/posts',                 componentName: 'PostsHome'},
  {name: 'posts.new',        path: '/new',                   componentName: 'PostsHome'}, 
  {name: 'posts.best',       path: '/best',                  componentName: 'PostsHome'},
  {name: 'posts.category',   path: '/category/:slug',        componentName: 'PostsCategory'},
  {name: 'posts.single',     path: '/posts/:_id/:slug?',     componentName: 'PostsPage'},
  
  // users

  {name: 'users.profile',    path: '/users/:slug',           componentName: 'UsersProfile'},
  {name: 'users.account',    path: '/account',               componentName: 'UsersAccount'},
  {name: 'users.edit',       path: '/users/:slug/edit',      componentName: 'UsersEdit'},

  // admin

  {name: 'admin.categories', path: '/admin/categories',      componentName: 'AdminCategories'},
  {name: 'admin.comments',   path: '/admin/comments',        componentName: 'AdminComments'},
  {name: 'admin.posts',      path: '/admin/posts',           componentName: 'AdminPosts'},
  {name: 'admin.users',      path: '/admin/users',           componentName: 'AdminUsers'},

]);
