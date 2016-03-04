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

    vm.myDate = new Date();

    vm.minDate = new Date(
        vm.myDate.getFullYear(),
        vm.myDate.getMonth() - 2,
        vm.myDate.getDate());

    vm.maxDate = new Date(
        vm.myDate.getFullYear(),
        vm.myDate.getMonth() + 2,
        vm.myDate.getDate());
    
    vm.onlyWeekendsPredicate = function(date) {
      var day = date.getDay();
      return day === 0 || day === 6;
    }

    vm.example = {
       value: new Date(1970, 0, 1, 14, 57, 0)
     };
  })