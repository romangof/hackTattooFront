'use strict';

angular
  .module('hackTattooFront')
  .service('API', function (baseUrl) {

    var toUrl = function (path) {
      return baseUrl+path;
    }

    this.dates = toUrl('/dates');
    this.access = toUrl('/access');
    this.register = toUrl('/registerClient');
    this.login = toUrl('/loginClient');
  });




  //  POST /register
  //  POST /access
  //  POST /dates
  //  POST /RegisterArtist
  //  POST /AccessArtist