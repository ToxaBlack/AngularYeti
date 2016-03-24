(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.controller('LoginController', LoginController);

	/** @ngInject */
	function LoginController($cookies, $http, $state,  $resource, Csrf, LoginService, $log, errorHandler, DataService) {
		var vm = this;

		vm.credentials = {
			username: null,
			password: null
		};

		var openResources = $resource('http://localhost:8080/rest/open', {}, {
			get: {method: 'GET', cache: false, isArray: false},
			post: {method: 'POST', isArray: false}
		});

		vm.getOpenGreetings = function () {
			vm.greetings.open.getResult = '';

			openResources.get().$promise.then(function (response) {
				$log.log('GET /rest/open returned: ', response);
				vm.greetings.open.getResult = response.greetings;
			});
		};

		vm.postOpenGreetings = function () {
			openResources.post({greetings: vm.greetings.open.postValue}).$promise.then(function (response) {
				$log.log('POST /rest/open returned: ', response);
				$log.info('You might want to check the server logs to see that the POST has been handled!');
			});
		};

		vm.login = function () {
			LoginService.login(vm.credentials.username, vm.credentials.password,
					function (data, status, headers, config) {
						DataService.setRoles([]);
						$state.go("home");
						$log.info('The user has been successfully logged in! ', data, status, headers, config);
						
					}, function (data, status, headers, config) {
						$log.error('Something went wrong while trying to login... ', data, status, headers, config);
						DataService.setRoles([]);
					});
		};

		vm.logout = function () {
			LoginService.logout(function (data, status, headers, config) {
				vm.credentials = {username: '', password: ''};
				delete $cookies['JSESSIONID'];
				$log.info('The user has been logged out!');
				DataService.setRoles([]);
				$state.go('/');

			}, function (data, status, headers, config) {

				$log.error('Something went wrong while trying to logout... ', data, status, headers, config);
				DataService.setRoles([]);
			});
		};

		var secureResources = function (headers) {
			if (headers) {
				return $resource('http://localhost:8080/rest/secure', {}, {
					post: {method: 'POST', headers: headers, isArray: false}
				});
			} else {
				return $resource('http://localhost:8080/rest/secure', {}, {
					get: {method: 'GET', cache: false, isArray: false},
					options: {method: 'OPTIONS', cache: false}
				});
			}
		};

		vm.getSecureGreetings = function () {
			vm.greetings.secure.getResult = '';

			secureResources().get().$promise.then(function (response) {
				$log.log('GET /rest/secure returned: ', response);
				vm.greetings.secure.getResult = response.greetings;

			}).catch(function (response) {
				errorHandler.handle(response);
			});
		};

		vm.postSecureGreetings = function () {
			Csrf.addResourcesCsrfToHeaders(secureResources().options, $http.defaults.headers.post).then(function (headers) {
				secureResources(headers).post({greetings: vm.greetings.secure.postValue}).$promise.then(function (response) {
					$log.log('POST /rest/secure returned: ', response);
					$log.info('You might want to check the server logs to see that the POST has been handled!');

				}).catch(function (response) {
					errorHandler.handle(response);
				});
			});
		};


	}
})();

