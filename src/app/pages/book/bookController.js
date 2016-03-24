(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.controller('BookController', BookController);

	/** @ngInject */
	function BookController(DataService) {
		var vm = this;
		vm.book = {};

		vm.isAdmin = DataService.getData().isAuth;

	}
})();
