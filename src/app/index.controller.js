'use strict';

angular
  .module('hackTattooFront')
  .controller('IndexController', function ($state) {

    var vm = this;

    vm.login = function () {
      $state.go('home.login');
    };
    vm.register = function () {
      $state.go('home.register');
    };

  });
