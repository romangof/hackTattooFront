(function() {
  'use strict';

  angular
    .module('hackTattooFront')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    $httpProvider.defaults.useXDomain = true;
    $httpProvider.interceptors.push(

    function ($q, $window) {
      return {
        request: function(config) { 

          config.headers = config.headers || {};
          config.headers['Content-Type'] = 'application/json';
          config.headers['Accept'] = 'json';

          if ($window.sessionStorage.user) {
            config.headers['X-Token'] = $window.sessionStorage.user;
          }           
          return config;
        }
      };
    }
    );
  }

})();
