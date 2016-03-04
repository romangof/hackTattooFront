'use strict';

angular
  .module('hackTattooFront')
  .service('API', function (baseUrl) {

    var toUrl = function (path) {
      return baseUrl+path;
    }

    this.dates = toUrl('/dates');
    this.access = toUrl('/access');
    this.register = toUrl('/register');
    this.login = toUrl('/access');
    this.registerArtist = toUrl('/registerArtist');
    this.loginArtist = toUrl('/accessArtist');
  });




  //  POST /register
  //  POST /access
  //  POST /dates
  //  POST /RegisterArtist
  //  POST /AccessArtist