'use strict';

angular
  .module('hackTattooFront')
  .controller('IndexController', function ($state) {

    var vm = this;
    console.log('asd');

    vm.login = function () {
      console.log('here');
      $state.go('home.login');
    };
    vm.register = function () {
      console.log('here');
      $state.go('home.register');
    };

  });
