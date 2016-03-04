'use strict';

angular
  .module('hackTattooFront')
  .controller('LoginController', function ($http, API, Token) {

    var vm = this;
    vm.user = {};

    vm.access = function () {
      console.log(vm.user);
      if (vm.user.username && vm.user.password) {

        console.log('Loggeando usuario');
        $http({
          method: 'POST',
          url: API.login,
          data:{
            name: vm.user.username,
            password: vm.user.password
          }
        }).success(function (data){
          Token.set(data.token)
          console.log(data);
        })
      }
    };

  });
