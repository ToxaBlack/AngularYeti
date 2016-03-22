(function () {
	'use strict';

	angular
			.module('gulpAngular')
			.config(routerConfig);

	/** @ngInject */
	function routerConfig($stateProvider, $urlRouterProvider) {
		$stateProvider
				.state('bookGrid', {
					url: '/',
					templateUrl: 'app/components/bookGrid/bookGrid.html',
					controller: 'BookGridController',
					controllerAs: 'booksCtrl'
				})
				.state('book', {
					url: '/book/:id',
					templateUrl: 'app/components/book/editBook.html'
				})
				.state('login', {
					url: '/login',
					templateUrl: 'app/components/login/login.html'
				});

		$urlRouterProvider.otherwise('/');
	}

})();
