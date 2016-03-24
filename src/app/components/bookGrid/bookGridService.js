(function () {
	'use strict';


	angular
			.module('YetiLibrary')
			.factory('BookGridService', BookGridService);

	/** @ngInject */
	function BookGridService($resource) {

		var secureResources = function (headers) {
			if (headers) {
				return $resource('http://localhost:8080/rest/books', {}, {
					post: {method: 'POST', headers: headers, isArray: true}
				});
			} else {
				return $resource('http://localhost:8080/rest/books', {}, {
					get: {method: 'GET', cache: false, isArray: true},
					options: {method: 'OPTIONS', cache: false}
				});
			}
		};

		return secureResources;
	}

})();
