'use strict';

angular
  .module('hackTattooFront')
  .factory('Artist', function (API, $resource) {
    return $resource(API.artists,
    {id: '@id'},
    {
      update: {
        method: 'put'
      }
    });
  });