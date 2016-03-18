(function() {
  'use strict';

  angular
    .module('gulpAngular')
    .run(initFoundation);

  /** @ngInject */
  function initFoundation() {
    angular.element(document).foundation();
  }

})();
