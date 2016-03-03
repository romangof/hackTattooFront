'use strict';

angular
  .module('hackTattooFront')
  .service('Token', function ($window) {

    this.set = function (user) {
      $window.sessionStorage.setItem('user', JSON.stringify(user));
    };

    this.get = function () {
      return JSON.parse($window.sessionStorage.getItem('user'));
    };

    this.has = function () {
      return !!$window.sessionStorage.getItem('user');
    };

  });