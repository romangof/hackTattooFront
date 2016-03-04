'use strict';

angular
  .module('hackTattooFront')
  .controller('ClientController', function ($state, Artist) {

    var vm = this;
    vm.artists = Artist.query();

    console.log(vm.artists);

    vm.get = function () {
    	console.log(vm.artists);
    }

  });
