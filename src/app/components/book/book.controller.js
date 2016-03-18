(function () {
  'use strict';

  angular
    .module('gulpAngular')
    .controller('BookController', BookController);

  /** @ngInject */
  function BookController($stateParams, $state, BookService) {
    var vm = this;
    vm.book = BookService.get($stateParams.id);
    vm.update = function() {
      console.log('Update');
    };

  }
})();
