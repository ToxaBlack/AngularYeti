(function () {
	'use strict';

	angular.module('gulpAngular').factory('errorHandler', function ($log, $state) {

		return {
			handle: function (response) {

				switch (response.status) {
					case 401:
						$log.error('You need to login first!');
						$state.go('login');
						break;
					case 403:
						$log.error('You t have permissions!');
						$state.go('bookGrid');
						break;
					default:
						$log.error('Something went wrong...', response);
				}

			}
		};
	});
})();