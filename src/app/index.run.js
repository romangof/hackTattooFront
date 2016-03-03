(function() {
  'use strict';

  angular
    .module('hackTattooFront')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
