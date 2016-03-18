(function() {
  'use strict';

  angular
      .module('gulpAngular')
      .service('BookGridService', BookGridService);

  /** @ngInject */
  function BookGridService() {
    var data = [
      {
        "id": 1,
        "title": "Test1",
        "author": "Smith",
        "type": "PDF",
        "rating": "3",
        "description": "description1",
        "date": "06/12/2013",
        "imageSrc": "http://placehold.it/550x550"
      },
      {
        "id": 2,
        "title": "Test2",
        "author": "Brown",
        "type": "PDF",
        "rating": "3",
        "description": "description2",
        "date": "07/12/2014",
        "imageSrc": "http://placehold.it/550x550"
      },
      {
        "id": 3,
        "title": "Test3",
        "author": "Oderscy",
        "type": "Paper",
        "description": "description3",
        "date": "08/12/2015",
        "imageSrc": "http://www.artima.com/images/PinSCover500x500.gif"
      },
      {
        "id": 4,
        "title": "Test4",
        "author": "Oderscy",
        "type": "PDF",
        "rating": "3",
        "description": "description3",
        "date": "08/12/2015",
        "imageSrc": "http://www.artima.com/images/PinSCover500x500.gif"
      },
      {
        "id": 5,
        "title": "Test5",
        "author": "Oderscy",
        "type": "PDF",
        "rating": "3",
        "description": "description3",
        "date": "08/12/2015",
        "imageSrc": "http://www.artima.com/images/PinSCover500x500.gif"
      },
      {
        "id": 6,
        "title": "Test6",
        "author": "Oderscy",
        "type": "PDF",
        "rating": "3",
        "description": "description3",
        "date": "08/12/2015",
        "imageSrc": "http://www.artima.com/images/PinSCover500x500.gif"
      }];

    this.getBooks = getBooks;

    function getBooks() {
      return data;
    }
  }

})();
