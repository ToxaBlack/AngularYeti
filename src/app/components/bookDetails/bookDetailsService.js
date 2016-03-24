(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.factory('BookDetailsService', BookService);

	/** @ngInject */
	function BookService($resource) {
		return  $resource('http://localhost:8080/rest/books/:id', {id: "@id"}, {
			get: {method: 'GET', cache: false, isArray: false},
			options: {method: 'OPTIONS', cache: false}
		});
	}

})();
