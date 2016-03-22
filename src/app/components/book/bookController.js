(function () {
	'use strict';

	angular
			.module('gulpAngular')
			.controller('BookController', BookController);

	/** @ngInject */
	function BookController($stateParams, $state, $http, BookService) {
		var vm = this;
		// vm.book = BookService.get({id: $stateParams.id});
		vm.book = $http.get("http://localhost:8080/api/books/56efe8b78928bd36a3a7b47f");
		vm.update = function () {
			$state.go('bookGrid');
		};

	}
})();
