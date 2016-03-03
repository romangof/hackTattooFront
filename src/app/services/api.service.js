'use strict';

angular
  .module('hackTattooFront')
  .service('API', function (baseUrl) {

    var toUrl = function (path) {
      return baseUrl+path;
    }

    // this.clients = toUrl('/clients/:id');
    // this.artists = toUrl('/artists/:id');
    this.dates = toUrl('/dates');
    this.access = toUrl('/access');
    this.register = toUrl('/clients');
  });




  //  POST /register
  //  POST /access
  //  POST /dates
  //  POST /RegisterArtist
  //  POST /AccessArtist