(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.run(initFoundation);

	/** @ngInject */
	function initFoundation() {
		angular.element(document).foundation();
	}

})();
