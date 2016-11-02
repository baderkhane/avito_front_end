angular.module('starter', ['starter.controllers', 'facebook'])
.config(function(FacebookProvider) {
   // Set your appId through the setAppId method or
   // use the shortcut in the initialize method directly.
   FacebookProvider.init('1100936123367194');
});
