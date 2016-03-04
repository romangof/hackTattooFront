'use strict';

angular
  .module('hackTattooFront')
  .controller('IndexController', function ($state) {

    var vm = this;
    console.log('loading index');
    $state.go('home');

    vm.home = function () {
      $state.go('home');
    }
    vm.login = function () {
      console.log('logging in');
      $state.go('login');
    };
    vm.register = function () {
      console.log('registering');
      $state.go('register');
    };

  });
