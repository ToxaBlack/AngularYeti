(function () {
  'use strict';

  angular
    .module('gulpAngular')
    .service('BookService', BookService);

  /** @ngInject */
  function BookService() {
    var book =
    {
      "id": 1,
      "title": "Test1",
      "author": "Smith",
      "type": "EPUB",
      "rating": "3",
      "description": "description1",
      "date": new Date(),
      "src": "http://placehold.it/550x550"
    };

    this.get = function() {
      return book;
    }
  }

})();
