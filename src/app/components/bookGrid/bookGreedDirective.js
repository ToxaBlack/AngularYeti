/**
 * Created by anton.charnou on 18.03.2016.
 */
(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.directive('bookGrid', bookGrid);

	/** @ngInject */
	function bookGrid() {
		var directive = {
			restrict: 'E',
			templateUrl: 'app/components/bookGrid/bookGrid.html'
		};

		return directive;
	}

})();
