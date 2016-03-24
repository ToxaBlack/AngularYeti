(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.controller('BookGridController', BookGridCtrl);

	/** @ngInject */
	function BookGridCtrl(BookGridService, $log, errorHandler) {
		var vm = this;
		vm.books = [];
		vm.page = 0;
		vm.PAGE_SIZE = 4;
		vm.isNext = false;
		vm.isPrev = false;
		vm.setBooks = function (response) {
			$log.log('GET /rest/books returned: ', response);
			vm.books = response.content;
			vm.isNext = (response.totalPages - vm.page - 1) ? true : false;
			vm.isPrev = vm.page ? true : false;
			
		};
		BookGridService(vm.page, vm.PAGE_SIZE).get().$promise.then(vm.setBooks, errorHandler.handle);
		vm.nextPage = function () {
			vm.page++;
			BookGridService(vm.page, vm.PAGE_SIZE).get().$promise.then(vm.setBooks, errorHandler.handle);

		};
		vm.prevPage = function () {
			vm.page--;
			BookGridService(vm.page, vm.PAGE_SIZE).get().$promise.then(vm.setBooks, errorHandler.handle);

		};

		angular.element(document).foundation('reflow');


	}
})();
