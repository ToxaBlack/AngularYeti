(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.controller('BookGridController', BookGridCtrl);

	/** @ngInject */
	function BookGridCtrl(BookGridService, $log, errorHandler) {
		var vm = this;
		vm.books = [];
		BookGridService().get().$promise.then(function (response) {
			$log.log('GET /rest/secure returned: ', response);
			vm.books = response;

		}).catch(function (response) {
			errorHandler.handle(response);
		});
		vm.next = function () {
			vm.books = BookGridService.getBooks().slice(4, 6);
		};
		vm.prev = function () {
			vm.books = BookGridService.getBooks().slice(0, 4);
		};


	}
})();
