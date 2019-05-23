(function() {
  'use strict';

  angular
    .module('minicursoMapas')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
