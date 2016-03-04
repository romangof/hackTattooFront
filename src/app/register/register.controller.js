'use strict';

angular
  .module('hackTattooFront')
  .controller('RegisterController', function ($http, API) {

    var vm = this;
    vm.user = {};

    vm.access = function () {
      console.log(vm.user);
      if (vm.user.username && vm.user.email && vm.user.password 
        && vm.user.passConf && (vm.user.passConf == vm.user.password)) {

        console.log('registrando usuario');
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
