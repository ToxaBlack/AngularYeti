(function () {
	'use strict';

	angular
			.module('gulpAngular')
			.factory('BookService', BookService);

	/** @ngInject */
	function BookService($resource) {

		var secureResources = function (headers) {
			if (headers) {
				return $resource('http://localhost:8080/rest/books/:id', {id: "@id"}, {
					post: {method: 'POST', headers: headers, isArray: false}
				});
			} else {
				return $resource('http://localhost:8080/rest/books/:id', {id: "@id"}, {
					get: {method: 'GET', cache: false, isArray: false},
					options: {method: 'OPTIONS', cache: false}
				});
			}
		};
		
		return secureResources;
	}

})();
