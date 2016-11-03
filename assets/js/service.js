angular.module('starter.services', [])
.factory('User', function($resource) {
  return $resource('http://192.168.43.114/loginFb?token=:token', { token: '@_id' }, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });
})
.factory('Product', function($resource) {
  return $resource('http://192.168.43.114/loginFb?token=:token', { token: '@_id' }, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });
});
