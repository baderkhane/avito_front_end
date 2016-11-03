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
})
.service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            if (name == 'user' && pw == 'secret') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
});
