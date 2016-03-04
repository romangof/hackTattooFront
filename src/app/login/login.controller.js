'use strict';

angular
  .module('hackTattooFront')
  .controller('LoginController', function ($http, API) {

    var vm = this;
    vm.user = {};

    vm.access = function () {
      console.log(vm.user);
      if (vm.user.username && vm.user.password) {

        console.log('Loggeando usuario');
        // $http({
        //   method: 'POST',
        //   url: API.register,
        //   data:user
        // }).success(function (data){
        //   console.log(data);
        // })
      }
    };

  });
