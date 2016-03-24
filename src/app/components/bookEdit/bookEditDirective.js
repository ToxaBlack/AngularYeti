/**
 * Created by anton.charnou on 18.03.2016.
 */
(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.directive('bookEdit', bookEdit);

	/** @ngInject */
	function bookEdit() {
		var directive = {
			restrict: 'E',
			templateUrl: 'app/components/bookEdit/bookEdit.html'
		};

		return directive;
	}

})();
