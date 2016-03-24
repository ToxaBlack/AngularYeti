(function () {
	'use strict';


	angular
			.module('YetiLibrary')
			.factory('BookGridService', BookGridService);

	/** @ngInject */
	function BookGridService($resource) {

		var secureResources = function (page, size, headers) {
			if (headers) {
				return $resource('http://localhost:8080/rest/books', {}, {
					post: {method: 'POST', headers: headers}
				});
			} else {
				return $resource('http://localhost:8080/rest/books', {}, {
					get: {method: 'GET', params: {
						page: page,
						size: size
					}},
					options: {method: 'OPTIONS'}
				});
			}
		};

		return secureResources;
	}

})();
