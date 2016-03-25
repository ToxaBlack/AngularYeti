(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.controller('AddBookController', AddBookController);

	/** @ngInject */
	function AddBookController($state, BookService, errorHandler, $log) {
		var vm = this;
		
		
		vm.book = {
			title: '',
			author: '',
			rating: 0,
			type: '',
			description: '',
			date: '',
			imageSrc: ''
		};
		vm.date = new Date();


		vm.add = function (flow) {
			vm.book.date = vm.date;
			BookService.add(vm.book).then(function () {
				$state.go('home');
			}).catch(function (response) {
				errorHandler.handle(response);
			});
			 

		};

	}
})();
