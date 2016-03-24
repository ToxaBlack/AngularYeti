(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.controller('BookController', BookController);

	/** @ngInject */
	function BookController($stateParams, $state, $log, BookService, errorHandler) {
		var vm = this;
		vm.book = {};
		vm.date = new Date();

		BookService().get({id: $stateParams.id}).$promise.then(function (response) {
			$log.log('GET /rest/secure returned: ', response);
			vm.book = response;
			vm.date = new Date(response.date);

		}).catch(function (response) {
			errorHandler.handle(response);
		});
		vm.update = function () {
			$state.go('bookGrid');
		};

	}
})();
