(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.controller('BookGridController', BookGridCtrl);

	/** @ngInject */
	function BookGridCtrl(BookService, errorHandler, DataService, anchorSmoothScroll) {
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
    
    vm.setDeleteBook = function(id) {
      vm.deleteId = id;
    };

		vm.delete = function() {
			BookService.delete(vm.deleteId).then(function() {
				if(vm.books.length === 1) {
					BookService.getPage(--vm.page, vm.PAGE_SIZE).then(vm.setBooks, errorHandler.handle);
				} else {
					BookService.getPage(vm.page, vm.PAGE_SIZE).then(vm.setBooks, errorHandler.handle);
				}
        
			});
      $('#delete-modal').foundation('reveal', 'close');
		};

    vm.goToBooks = function() {
      anchorSmoothScroll.scrollTo('books');
    };

    angular.element(document).foundation('reveal', 'reflow');

		angular.element('#animated').addClass('animated pulse');
	}
})();
