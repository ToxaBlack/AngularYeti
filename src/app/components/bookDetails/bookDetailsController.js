(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.controller('BookDetailsController', BookDetailsController);

	/** @ngInject */
	function BookDetailsController($stateParams, $log, BookDetailsService, errorHandler) {
		var vm = this;
		vm.book = {};

		BookDetailsService.get({id: $stateParams.id}).$promise.then(function (response) {
			$log.log('GET /rest/secure returned: ', response);
			vm.book = response;

		}).catch(function (response) {
			errorHandler.handle(response);
		});

	}
})();
