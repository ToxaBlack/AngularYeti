(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.controller('BookGridController', BookGridCtrl);

	/** @ngInject */
	function BookGridCtrl(BookService, errorHandler, DataService) {
		var vm = this;
		vm.books = [];
		vm.page = 0;
		vm.PAGE_SIZE = 4;
		vm.isNext = false;
		vm.isPrev = false;
		vm.data = DataService.getData();
		vm.setBooks = function (response) {
			vm.books = response.content;
			vm.isNext = (response.totalPages - vm.page - 1) ? true : false;
			vm.isPrev = vm.page ? true : false;
			
		};
		BookService.getPage(vm.page, vm.PAGE_SIZE).then(vm.setBooks, errorHandler.handle);
		vm.nextPage = function () {
			vm.page++;
			BookService.getPage(vm.page, vm.PAGE_SIZE).then(vm.setBooks, errorHandler.handle);

		};
		vm.prevPage = function () {
			vm.page--;
			BookService.getPage(vm.page, vm.PAGE_SIZE).then(vm.setBooks, errorHandler.handle);

		};

		vm.delete = function(id) {
			BookService.delete(id).then(function() {
				if(vm.books.length === 1) {
					BookService.getPage(--vm.page, vm.PAGE_SIZE).then(vm.setBooks, errorHandler.handle);
				} else {
					BookService.getPage(vm.page, vm.PAGE_SIZE).then(vm.setBooks, errorHandler.handle);
				}
			});
			
		};

		angular.element('#animated').addClass('animated pulse');
	}
})();
