(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.directive('yetiNavbar', bookNavbar);

	/** @ngInject */
	function bookNavbar() {
		var directive = {
			restrict: 'E',
			templateUrl: 'app/components/navbar/navbar.html'
		};

		return directive;
	}

})();
