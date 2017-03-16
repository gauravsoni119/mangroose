(function() {
  'use strict';

  angular
    .module('mangroosHub')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
