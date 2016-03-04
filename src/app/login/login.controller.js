'use strict';

angular
  .module('hackTattooFront')
  .controller('LoginController', function ($http, $state, API, Token) {

    var vm = this;
    vm.user = {};

    vm.access = function () {
      console.log(vm.user);
      if (vm.user.email && vm.user.password) {

        console.log('Loggeando usuario');
        $http({
          method: 'POST',
          url: API.login,
          data:{
            email: vm.user.email,
            password: vm.user.password
          }
        }).success(function (data){
          Token.set(data.token)
          console.log(data);
          $state.go('home');
        })
      }
    };

  });
