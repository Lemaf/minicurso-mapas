(function() {
  'use strict';

  angular
    .module('minicursoMapas')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $window) {

    // var vm = this;

    // Caso tenha algum analisador de código
    var L = $window.L;

    var map = L.map('map').setView([-3.46956, -52.82227], 6);

    var mosaico1 = L.tileLayer('http://sistemas.semas.pa.gov.br/gs_p/gwc/service/tms/1.0.0/mosaicos:mosaico_pa_2015_landsat@EPSG%3A900913@png/{z}/{x}/{y}.png', {
      tms: true,
      minZoom: 6,
      maxZoom: 15,
      maxNativeZoom: 15
    }).addTo(map)

    var mosaico2 = L.tileLayer('http://sistemas.semas.pa.gov.br/gs_p/gwc/service/tms/1.0.0/mosaicos:mosaico_pa_2016_rapideye@EPSG%3A900913@png/{z}/{x}/{y}.png', {
      tms: true,
      minZoom: 6,
      maxZoom: 15,
      maxNativeZoom: 15
    }).addTo(map)

    L.control.sideBySide(mosaico1, mosaico2).addTo(map);

  }

})();
