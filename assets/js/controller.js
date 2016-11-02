angular.module('starter.controllers', [])
.controller("UserProfileCtrl",function($scope, Facebook){
    $scope.$watch(function() {
      // This is for convenience, to notify if Facebook is loaded and ready to go.
      return Facebook.isReady();
    }, function(newVal) {
      // You might want to use this to disable/show/hide buttons and else
      $scope.facebookReady = true;
    });
    $scope.login = function() {
      console.log("clicked");
    // From now on you can use the Facebook service just as Facebook api says
      Facebook.login(function(response) {
        // Do something with response.
        console.log(response);
      });
    };
    $scope.getLoginStatus = function() {
      Facebook.getLoginStatus(function(response) {
        if(response.status === 'connected') {
          $scope.loggedIn = true;
        } else {
          $scope.loggedIn = false;
        }
      });
    };
    $scope.me = function() {
      Facebook.api('/me', function(response) {
        $scope.user = response;
      });
    };
});