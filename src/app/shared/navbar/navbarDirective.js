(function () {
	'use strict';

	angular
			.module('gulpAngular')
			.directive('yetiNavbar', bookNavbar);

	/** @ngInject */
	function bookNavbar() {
		var directive = {
			restrict: 'E',
			templateUrl: 'app/shared/navbar/navbar.html'
		};

		return directive;
	}

})();
