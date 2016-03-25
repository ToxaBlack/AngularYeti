(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.config(routerConfig);

	/** @ngInject */
	function routerConfig($stateProvider, $urlRouterProvider) {
		$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'app/pages/home/home.html'
				})
				.state('book', {
					url: '/book/:id',
					templateUrl: 'app/pages/book/book.html'
				})
				.state('login', {
					url: '/login',
					templateUrl: 'app/pages/login/login.html'
				})
				.state('addBook', {
					url: '/add',
					templateUrl: 'app/pages/addBook/addBook.html'
				});

		$urlRouterProvider.otherwise('/');
	}

})();
