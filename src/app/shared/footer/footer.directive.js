/**
 * Created by anton.charnou on 18.03.2016.
 */
(function() {
  'use strict';

  angular
    .module('gulpAngular')
    .directive('yetiFooter', yetiFooter);

  /** @ngInject */
  function yetiFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/shared/footer/footer.html'
    };

    return directive;
  }

})();
