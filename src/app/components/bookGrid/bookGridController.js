(function () {
	'use strict';

	angular
			.module('gulpAngular')
			.controller('BookGridController', BookGridCtrl);

	/** @ngInject */
	function BookGridCtrl(BookGridService) {
		var vm = this;
		vm.books = BookGridService.getBooks().slice(0, 4);
		vm.next = function () {
			vm.books = BookGridService.getBooks().slice(4, 6);
		};
		vm.prev = function () {
			vm.books = BookGridService.getBooks().slice(0, 4);
		};


	}
})();
