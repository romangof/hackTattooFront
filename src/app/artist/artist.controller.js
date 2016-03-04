'use strict';

angular
  .module('hackTattooFront')
  .controller('ArtistController', function ($state, Artist) {

    var vm = this;
    vm.artists = Artist.query();

    console.log('asd');

  });
