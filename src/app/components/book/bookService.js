(function () {
	'use strict';

	angular
			.module('gulpAngular')
			.service('BookService', BookService)
			.factory('UserService', BookService);

	/** @ngInject */
	function BookService($resource) {
		return $resource('http://localhost:8080/api/books/:id', {id: "@id"});
	}

})();
