/**
 * Created by anton.charnou on 18.03.2016.
 */
(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.directive('yetiFooter', yetiFooter);

	/** @ngInject */
	function yetiFooter() {
		var directive = {
			restrict: 'E',
			templateUrl: 'app/components/footer/footer.html'
		};

		return directive;
	}

})();
