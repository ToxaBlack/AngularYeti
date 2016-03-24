/**
 * Created by anton.charnou on 23.03.2016.
 */
(function () {
	'use strict';

	angular.module('YetiLibrary').factory('DataService', function ($cookies, $log, $resource) {
		var vm = this;
		vm.data = {
			isAuth: false
		};

		var secureResources = function (headers) {
			if (headers) {
				return $resource('http://localhost:8080/rest/users/roles', {}, {
					post: {method: 'POST', headers: headers, isArray: true}
				});
			} else {
				return $resource('http://localhost:8080/rest/users/roles', {}, {
					get: {method: 'GET', cache: false, isArray: true},
					options: {method: 'OPTIONS', cache: false}
				});
			}
		};

		secureResources().get().$promise.then(function (response) {
			$log.log('GET /rest/user/roles returned: ', response);
			vm.data.isAuth = response;

		}).catch(function (response) {

		});

		return {
			setIsAuth: function (isAuth) {
				vm.data.isAuth = isAuth;
			},
			getData: function() {
				return vm.data;
			}
		};


	});
})();