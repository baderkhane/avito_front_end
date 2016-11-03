angular.module('starter', ['starter.controllers','starter.services', 'facebook', 'ngResource', 'ngRoute','ui.router'])
.config(function($routeProvider, $stateProvider, $urlRouterProvider, FacebookProvider) {
   // Set your appId through the setAppId method or
   // use the shortcut in the initialize method directly.
   FacebookProvider.init('1100936123367194');
   //Routes  $routeProvider
   $routeProvider
   .when('/login', {
    templateUrl: 'template/login.html',
    controller: 'LoginCtrl'
  })
  .when('/profile', {
   templateUrl: 'template/profile.html',
   controller: 'UserProfileCtrl'
 })
  .otherwise({redirectTo:'/profile'});
});
