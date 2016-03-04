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
        views: {
          'main':{
            templateUrl: 'app/home/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
          }
        }
      });
    
    $stateProvider
      .state('register', {
        views: {
          'modal':{
            templateUrl: 'app/register/register.html',
            controller: 'RegisterController',
            controllerAs: 'register'
          }
        }
      });
    $stateProvider
      .state('login', {
        views: {
          'modal':{
            templateUrl: 'app/login/login.html',
            controller: 'LoginController',
            controllerAs: 'login'
          }
        }
      });
    $stateProvider
      .state('client', {
        url: '/client',
        views: {
          'main':{
            templateUrl: 'app/client/client.html',
            controller: 'ClientController',
            controllerAs: 'client'
          }
        }
      });
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'index.html'
      });

    $urlRouterProvider.otherwise('/home');
  }

})();
