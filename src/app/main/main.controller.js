(function() {
  'use strict';

  angular
    .module('minicursoMapas')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($window) {

    var L = $window.L;

    var map = L.map('map', {
      minZoom: 6,
      maxZoom: 15
      // dragging: false
    }).setView([-3.46956, -52.82227], 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.tileLayer('http://car.semas.pa.gov.br/site/mosaicos/rapid-eye/{z}/{x}/{y}', {
      tms: true
    }).addTo(map);

  }

})();
