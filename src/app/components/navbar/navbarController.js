(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.controller('NavbarController', NavbarController);

	/** @ngInject */
	function NavbarController(DataService, LoginService, $state, $log, $cookies) {
		var vm = this;
		vm.data = DataService.getData();

		vm.logout = function () {
			LoginService.logout(function (data, status, headers, config) {
				vm.credentials = {username: '', password: ''};
				delete $cookies['JSESSIONID'];
				$log.info('The user has been logged out!');
				DataService.setIsAuth(false);
				$state.go('login');

			}, function (data, status, headers, config) {

				$log.error('Something went wrong while trying to logout... ', data, status, headers, config);
				DataService.setIsAuth(false);
			});
		};
	}
})();
