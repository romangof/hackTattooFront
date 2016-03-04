(function() {
  'use strict';

  angular
    .module('hackTattooFront')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    // $stateProvider
    //   .state('home', {
    //     url: '/',
    //     templateUrl: 'app/main/main.html',
    //     controller: 'MainController',
    //     controllerAs: 'main'
    //   });
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      });
    $stateProvider
      .state('home.register', {
        // url: '/register',
        templateUrl: 'app/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'register'
      });
    $stateProvider
      .state('home.login', {
        // url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      });

      

    $urlRouterProvider.otherwise('/home');
  }

})();
