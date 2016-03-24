(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.directive('ratingImp', rating);

	/** @ngInject */
	function rating() {
		var directive = {
			restrict: 'E',
			templateUrl: 'app/shared/rating/rating.html'
		};

		return directive;
	}

})();
