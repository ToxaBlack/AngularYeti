(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.config(config);

	/** @ngInject */
	function config($logProvider, toastrConfig, $httpProvider, $provide, flowFactoryProvider) {
		// Enable log
		$logProvider.debugEnabled(true);

		// Set options third-party lib
		toastrConfig.allowHtml = true;
		toastrConfig.timeOut = 3000;
		toastrConfig.positionClass = 'toast-top-right';
		toastrConfig.preventDuplicates = true;
		toastrConfig.progressBar = true;

		$httpProvider.defaults.withCredentials = true;
		// Tough luck: the default cookie-to-header mechanism is not working for cross-origin requests!
		$httpProvider.defaults.xsrfCookieName = 'CSRF-TOKEN'; // The name of the cookie sent by the server
		$httpProvider.defaults.xsrfHeaderName = 'X-CSRF-TOKEN'; // The default header name picked up by Spring Security

		$provide.value('restUrl', 'http://192.168.12.44:8080');

		flowFactoryProvider.defaults = {
			singleFile: true
		};
	}

})();
