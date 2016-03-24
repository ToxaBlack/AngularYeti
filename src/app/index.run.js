(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.run(initFoundation);

	/** @ngInject */
	function initFoundation($rootScope) {
		angular.element(document).foundation('reflow');

		$rootScope.$on('$viewContentLoaded', function () {
			angular.element(document).foundation('reflow');
		});
	}

})();
